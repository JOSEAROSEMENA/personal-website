output "bucket_name" {
  description = "S3 bucket that stores the built static site."
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for cache invalidations."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Default CloudFront domain name."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "hosted_zone_id" {
  description = "Route 53 hosted zone ID for the domain."
  value       = aws_route53_zone.site.zone_id
}

output "hosted_zone_name_servers" {
  description = "Nameservers to configure at the domain registrar if the domain was not registered in Route 53."
  value       = aws_route53_zone.site.name_servers
}

output "site_urls" {
  description = "Public site URLs."
  value = [
    "https://${local.apex_domain}",
    "https://${local.www_domain}",
  ]
}

output "github_actions_role_arn" {
  description = "IAM role ARN for GitHub Actions OIDC deployments."
  value       = aws_iam_role.github_actions_deploy.arn
}
