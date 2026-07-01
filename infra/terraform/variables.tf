variable "domain_name" {
  description = "Apex domain name for the site."
  type        = string
  default     = "josearosemena.dev"
}

variable "aws_region" {
  description = "AWS region for regional resources such as S3 and Route 53."
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Optional globally unique S3 bucket name. Defaults to a name based on the domain and AWS account ID."
  type        = string
  default     = null
}

variable "force_destroy_bucket" {
  description = "Allow Terraform to delete the S3 bucket even when it contains objects."
  type        = bool
  default     = false
}

variable "price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}

variable "github_repository" {
  description = "GitHub repository allowed to assume the deployment role, formatted as owner/repo."
  type        = string
  default     = "JOSEAROSEMENA/personal-website"
}

variable "github_branch" {
  description = "GitHub branch allowed to deploy."
  type        = string
  default     = "main"
}

variable "github_oidc_provider_arn" {
  description = "Existing GitHub Actions OIDC provider ARN. Leave null to create one in this AWS account."
  type        = string
  default     = null
}
