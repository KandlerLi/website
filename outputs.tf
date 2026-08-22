output "bucket_name" {
  description = "S3 bucket holding the site content, for the deploy workflow's aws s3 sync"
  value       = aws_s3_bucket.site.id
}

output "distribution_id" {
  description = "CloudFront distribution ID, for the deploy workflow's cache invalidation"
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_domain_name" {
  description = "CloudFront distribution's own domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "Public URL of the site"
  value       = "https://${var.domain_name}/"
}
