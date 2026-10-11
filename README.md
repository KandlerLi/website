# Personal website

Static site served from `https://www.jkandler.de/`:

```text
Route53 (www.jkandler.de) -> CloudFront -> S3 (private, via Origin Access Control)
```

Content lives in `site/` — plain HTML/CSS, no build step. The bare apex
`jkandler.de` is deliberately untouched: it's owned by `dyndns`, which keeps
it pointed at the home network. This repository only ever adds the `www`
name.

## What Terraform creates

- A private S3 bucket (no public access, no static-website-hosting
  endpoint) holding the site files
- A CloudFront distribution reading from that bucket through Origin Access
  Control
- An ACM certificate for `www.jkandler.de` (in `us-east-1`, as CloudFront
  requires), validated via Route53 DNS records
- Route53 `A`/`AAAA` alias records pointing `www.jkandler.de` at the
  CloudFront distribution

The existing Route53 hosted zone is deliberately not created here, same as
`dyndns` — its ID is a required input.

## Extensionless URLs

Pages can be linked without a file extension (e.g. `/card`) although the
site is plain static files. A CloudFront function
(`cloudfront-functions/url-rewrite.js`) rewrites extensionless URIs to
their `.html` file and directory-style URIs to their `index.html` at the
edge, before the request reaches S3.

## Security scan exceptions and hardening

trivy runs on every PR. Three findings are suppressed on purpose:

- **AWS-0320, bucket name not DNS-compliant.** The bucket stays
  `www.jkandler.de`. The check's concern (TLS name matching on dotted
  bucket names) doesn't apply: the bucket is only ever reached through
  CloudFront's Origin Access Control, never directly over
  virtual-hosted-style HTTPS. A rename attempt caused a production
  incident, see
  [ADR 0022](https://github.com/KandlerLi/home-infra-docs/blob/main/docs/adr/0022-trivy-config-scanning-and-public-repo-tradeoff.md).
  `force_destroy = true` stays from that recovery, so a future
  replacement of the bucket can't hit the same trap.
- **AWS-0011, no WAF.** A WAFv2 web ACL costs about $5-6/month plus
  per-request charges, out of proportion to this account's $10/month
  budget for a static site with no forms, logins or backend.
- **AWS-0010, no CloudFront access logs.** Classic logging needs Object
  Ownership switched back to "Bucket owner preferred" so ACLs can be
  granted (a hardening regression); v2 logging needs a Firehose delivery
  stream and IAM role. Neither is worth it for a low-traffic personal
  site.

The other findings are fixed: the bucket is versioned so a bad
`aws s3 sync --delete` can be rolled back (AWS-0090), logs its own access
under a separate prefix like `terraform-state`'s buckets do (AWS-0089),
and is encrypted with the shared customer managed key from
[`terraform-state`](https://github.com/KandlerLi/terraform-state), looked
up by its alias (AWS-0132).

## Prerequisites

- Terraform 1.10 or newer
- The `jkandler-terraform-state` S3 backend bucket
- An existing public Route53 hosted zone for `jkandler.de`
- AWS credentials that can deploy the resources in this repository when
  bootstrapping or recovering outside GitHub Actions

## Deploy

```bash
terraform init
terraform plan
terraform apply
```

The S3 backend uses `website/terraform.tfstate` and native S3 lock files.

The account-wide GitHub OIDC provider and the repository-bound plan/apply
roles are owned by [`repo-infra`](https://github.com/KandlerLi/repo-infra). That
Terraform root runs only from a trusted local controller with a
short-lived administrative or bootstrap identity.

`repo-infra`'s apply also sets the `AWS_ROLE_ARN`/`AWS_PLAN_ROLE_ARN`/
`AWS_ACCOUNT_ID`/`ROUTE53_ZONE_ID` GitHub Actions repository variables
itself (`modules/repo`'s `github_actions_variable` resources, wired to
the real role ARNs it just created plus this repository's
`action_variables` entry in `config.yml`) — nothing needs to be pasted
into the GitHub UI by hand.

## GitHub Actions credentials

Same as `dyndns`: no IAM user, no stored access keys. On `main`, GitHub
issues an OIDC token exchanged for a short-lived session on the
`website-github-actions` role. Pull requests get a separate read-only
session on `website-github-plan` for a speculative `terraform plan`
(skipped for forked PRs). After a merge, the apply workflow runs
`terraform apply`, then `aws s3 sync site/` to the bucket, then a
CloudFront cache invalidation.

## Runner

Uses the self-hosted home runner (`[self-hosted, home, debian]`), same as
`dyndns`. Originally deployed on GitHub-hosted runners specifically to
keep the deploy pipeline independent of home-network uptime, since the
site's own reachability (CloudFront/S3) already doesn't depend on it —
switched to self-hosted on 2026-08-23 at the user's explicit request,
after being shown that tradeoff directly: a homeserver outage now also
blocks shipping a content or infra fix to this site, not just home
services. See ADR 0016's Update section.

## Local validation

```bash
terraform fmt -check -recursive
terraform init -backend=false
terraform validate
```

GitHub Actions uses the same checks. Action dependencies are pinned to full
commit hashes rather than mutable version tags.
