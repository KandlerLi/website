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
roles are owned by `/home/julian/projects/bootstrap/repo-infra`. That
Terraform root runs only from a trusted local controller with a
short-lived administrative or bootstrap identity.

After bootstrapping or changing those roles, set these non-secret
repository variables under **Settings → Secrets and variables → Actions →
Variables**:

| Repository variable | Value |
|---|---|
| `AWS_ROLE_ARN` | `terraform -chdir=../repo-infra output -raw website_github_actions_role_arn` (or read the role ARN directly from `repo-infra`'s apply output) |
| `AWS_PLAN_ROLE_ARN` | Same, for the plan role |
| `AWS_ACCOUNT_ID` | The AWS account ID |
| `ROUTE53_ZONE_ID` | The same hosted-zone ID used locally, e.g. `Z07879811I86VC8PAL8HX` |

## GitHub Actions credentials

Same as `dyndns`: no IAM user, no stored access keys. On `main`, GitHub
issues an OIDC token exchanged for a short-lived session on the
`website-github-actions` role. Pull requests get a separate read-only
session on `website-github-plan` for a speculative `terraform plan`
(skipped for forked PRs). After a merge, the apply workflow runs
`terraform apply`, then `aws s3 sync site/` to the bucket, then a
CloudFront cache invalidation.

## Runner

Unlike `dyndns`, this repository intentionally uses GitHub-hosted runners
(`runs-on: ubuntu-latest`), not the self-hosted home runner. The entire
point of hosting this site on AWS is to stop depending on the home
network/server for it to be reachable — tying its deploy pipeline back to
the home runner would partially undo that.

## Local validation

```bash
terraform fmt -check -recursive
terraform init -backend=false
terraform validate
```

GitHub Actions uses the same checks. Action dependencies are pinned to full
commit hashes rather than mutable version tags.
