# Personal Website

Personal portfolio site for Jose Arosemena, focused on full-stack DevOps, cloud automation, and infrastructure delivery work.

The site is a React single-page application backed by an AWS static hosting architecture. The frontend is intentionally lightweight, while the deployment path is treated like production infrastructure: Terraform-managed AWS resources, GitHub Actions CI/CD, private S3 origin access, HTTPS, and CloudFront cache invalidation on deploy.

## What This Project Demonstrates

- React portfolio UI built with Material UI and custom theming
- Static website delivery through Amazon S3 and CloudFront
- Infrastructure as code with Terraform
- HTTPS custom-domain setup with AWS Certificate Manager
- DNS management through Route 53
- GitHub Actions deployment using AWS OIDC, avoiding long-lived AWS access keys
- Repeatable build and release flow for a public web property

## Architecture

```text
GitHub push to main
        |
        v
GitHub Actions
        |
        | npm ci && npm run build
        v
AWS OIDC role assumption
        |
        v
S3 private bucket  <--- CloudFront Origin Access Control
        |
        v
CloudFront distribution
        |
        v
josearosemena.dev / www.josearosemena.dev
```

The S3 bucket is not public. CloudFront reads from S3 through Origin Access Control, and DNS aliases point the apex and `www` hostnames to CloudFront. CloudFront handles HTTPS, compression, caching, and SPA fallback responses for client-side routing.

## Tech Stack

- React 19
- Create React App / react-scripts
- Material UI
- Emotion
- Terraform
- AWS S3
- AWS CloudFront
- AWS Route 53
- AWS Certificate Manager
- GitHub Actions

## Local Development

### Prerequisites

- Node.js 20 recommended
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

This creates the production-ready static files in `build/`.

## Deployment

Infrastructure lives in [infra/terraform](infra/terraform). Terraform provisions:

- Private S3 bucket for static build artifacts
- CloudFront distribution
- CloudFront Origin Access Control for private S3 access
- ACM certificate in `us-east-1`
- Route 53 hosted zone and DNS records
- GitHub Actions OIDC role for deployments
- Least-privilege IAM permissions for S3 sync and CloudFront invalidation

The GitHub Actions workflow lives in [.github/workflows/deploy.yml](.github/workflows/deploy.yml). On every push to `main`, it:

1. Checks out the repository
2. Installs dependencies with `npm ci`
3. Builds the app with `npm run build`
4. Assumes the Terraform-created AWS deployment role through OIDC
5. Syncs `build/` to S3
6. Invalidates CloudFront

Required GitHub repository variables:

```text
AWS_REGION
AWS_ROLE_TO_ASSUME
S3_BUCKET_NAME
CLOUDFRONT_DISTRIBUTION_ID
```

These are repository variables, not secrets, because they are resource identifiers rather than credentials. AWS authentication is handled through GitHub OIDC.

## Infrastructure Notes

The target domain is:

```text
josearosemena.dev
www.josearosemena.dev
```

The domain was purchased through Namecheap, so the Namecheap nameservers must be updated to the Route 53 nameservers created by Terraform. See [infra/terraform/README.md](infra/terraform/README.md) for the DNS bootstrap and deployment steps.

## Available Scripts

- `npm start` - Run the app locally
- `npm run build` - Build production static files
- `npm test` - Run the test runner
- `npm run deploy:aws` - Manual S3 sync and CloudFront invalidation using local AWS credentials

## Repository Structure

```text
src/                 React application source
public/              Static public assets
infra/terraform/     AWS infrastructure as code
.github/workflows/   GitHub Actions deployment workflow
scripts/             Local deployment helper scripts
```

## License

This project is open source and available under the MIT License.
