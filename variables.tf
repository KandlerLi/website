variable "aws_region" {
  description = "AWS region for the S3 bucket that holds the site content"
  type        = string
}

variable "domain_name" {
  description = "DNS name the site is served under"
  type        = string

  validation {
    condition = length(var.domain_name) <= 253 && length(split(".", var.domain_name)) >= 2 && alltrue([
      for label in split(".", var.domain_name) : can(regex("^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$", label))
    ])
    error_message = "domain_name must be a lowercase fully qualified DNS name without a trailing dot."
  }
}

variable "route53_zone_id" {
  description = "ID of the existing public Route53 hosted zone for jkandler.de"
  type        = string

  validation {
    condition     = can(regex("^Z[A-Z0-9]+$", var.route53_zone_id))
    error_message = "route53_zone_id must be a Route53 hosted-zone ID beginning with Z."
  }
}

variable "tags" {
  description = "Tags applied to supported AWS resources"
  type        = map(string)
}
