# Non-secret deployment configuration. Every variable here is required
# (no default in variables.tf) -- this file is the single explicit
# source, whether applied by CI or a human running `terraform apply`
# locally with no other setup.
aws_region      = "eu-central-1"
domain_name     = "www.jkandler.de"
route53_zone_id = "Z07879811I86VC8PAL8HX"

tags = {
  ManagedBy = "Terraform"
  Project   = "website"
}
