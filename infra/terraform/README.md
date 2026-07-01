# AWS Static Site Infrastructure

Terraform provisions a private S3 bucket, CloudFront, ACM, and Route 53 for:

- `josearosemena.dev`
- `www.josearosemena.dev`

## Prerequisites

1. Configure AWS credentials locally.
2. If the domain is not registered in Route 53, be ready to update its nameservers at the registrar.

## Create Infrastructure

If Terraform will create the hosted zone before the registrar delegates the domain to it, run the hosted-zone step first:

```bash
cd infra/terraform
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform apply -target=aws_route53_zone.site
terraform output hosted_zone_name_servers
```

Copy those nameservers into the registrar settings for `josearosemena.dev`, then run the full apply:

```bash
cd infra/terraform
terraform plan
terraform apply
```

## Deploy Site Files

The normal deployment path is GitHub Actions. After `terraform apply`, add these GitHub Actions repository variables:

```bash
AWS_REGION=us-east-1
AWS_ROLE_TO_ASSUME=$(terraform output -raw github_actions_role_arn)
S3_BUCKET_NAME=$(terraform output -raw bucket_name)
CLOUDFRONT_DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)
```

The workflow in `.github/workflows/deploy.yml` deploys on every push to `main`.

For a manual local deployment from the repo root:

```bash
npm run deploy:aws
```

The script runs `npm run build`, syncs `build/` to S3, and invalidates CloudFront.

## Useful Outputs

```bash
terraform -chdir=infra/terraform output
```
