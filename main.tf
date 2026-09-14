data "aws_route53_zone" "selected" {
  zone_id      = var.route53_zone_id
  private_zone = false
}

# --- S3 origin -----------------------------------------------------------
# Private bucket, no static-website-hosting endpoint, no public bucket
# policy. CloudFront reaches it only through Origin Access Control.

# bootstrap/terraform-state's own shared CMK, looked up by its fixed
# alias -- fixes trivy's AWS-0132 below. Needs kms:ListAliases/
# DescribeKey on this repo's own apply/plan roles (repo-infra#11).
data "aws_kms_alias" "shared" {
  name = "alias/shared"
}

resource "aws_s3_bucket" "site" {
  # AWS-0320 (bucket name not DNS-compliant) rename to jkandler-website
  # REVERTED here, deliberately, after two failed live attempts
  # (2026-09-14) -- back to the original, still-live www.jkandler.de so
  # this apply is a plain in-place update (restoring the policy/
  # access-block/ownership-controls the first attempt destroyed) rather
  # than another risky replace. What went wrong both times:
  #
  # 1st attempt: Terraform's default replacement order is
  # destroy-old-then-create-new. It destroyed the old bucket's policy,
  # public access block, and ownership controls, then failed to delete
  # the bucket itself (BucketNotEmpty -- real site content in it),
  # leaving the live bucket without a policy CloudFront's OAC could use.
  #
  # 2nd attempt added force_destroy = true and create_before_destroy,
  # but hit the same BucketNotEmpty error again: force_destroy only
  # takes effect for how a resource *instance* gets destroyed if it was
  # already recorded in *that instance's* own state. The old
  # www.jkandler.de instance's state never had force_destroy = true
  # written to it (only the new instance being created would get it),
  # so its destroy still read the old, unset value.
  #
  # The actual fix is a genuine two-step change, not one PR: this PR
  # only adds force_destroy = true to the *current* bucket (an in-place
  # update, no rename) so it's confirmed recorded in state. A separate,
  # later PR can then safely retry the rename -- at that point the old
  # instance's destroy will correctly read force_destroy = true.
  bucket = var.domain_name

  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Fixes trivy's AWS-0090 -- lets a bad `aws s3 sync --delete` be rolled
# back from a noncurrent version instead of the content just being gone.
resource "aws_s3_bucket_versioning" "site" {
  bucket = aws_s3_bucket.site.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "site" {
  bucket = aws_s3_bucket.site.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = data.aws_kms_alias.shared.target_key_arn
    }
  }
}

# Fixes trivy's AWS-0089 -- self-logging under a distinct prefix, same
# pattern as terraform-state's own buckets. No dedicated second bucket
# for a personal site's own access logs.
resource "aws_s3_bucket_logging" "site" {
  bucket        = aws_s3_bucket.site.id
  target_bucket = aws_s3_bucket.site.id
  target_prefix = "access-logs/"
}

resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = var.domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_iam_policy_document" "site_bucket" {
  statement {
    sid       = "AllowCloudFrontRead"
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.site.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.site_bucket.json
}

# --- Certificate -----------------------------------------------------------
# Must live in us-east-1 for CloudFront regardless of where the bucket is.

resource "aws_acm_certificate" "site" {
  provider = aws.us_east_1

  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.site.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }

  zone_id         = var.route53_zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.value]
  ttl             = 60
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "site" {
  provider = aws.us_east_1

  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# --- CloudFront distribution -----------------------------------------------

# AWS-0011 (no WAF): a real WAFv2 web ACL runs ~$5-6/month base plus
# per-request charges, disproportionate to this account's $10/month
# budget for a static personal CV site with no forms, logins, or
# dynamic backend -- a very small attack surface for a WAF to
# meaningfully reduce.
#
# AWS-0010 (no access logging): both real fixes have their own cost --
# classic logging needs Object Ownership switched from "Bucket owner
# enforced" back to "Bucket owner preferred" so ACLs can be granted to
# the log-delivery principal (a real hardening regression), and the
# newer Firehose-based v2 logging adds a whole delivery-stream + IAM
# role pipeline. Neither is proportionate to the investigative value of
# access logs for a low-traffic personal site.
#trivy:ignore:AVD-AWS-0011
#trivy:ignore:AVD-AWS-0010
resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name]
  price_class         = "PriceClass_100"

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.site.id
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.site.id
    viewer_protocol_policy = "redirect-to-https"

    # Managed-CachingOptimized
    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.site.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# --- DNS ---------------------------------------------------------------

resource "aws_route53_record" "site" {
  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "site_ipv6" {
  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
