#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TERRAFORM_DIR="${ROOT_DIR}/infra/terraform"

if ! command -v terraform >/dev/null 2>&1; then
  echo "terraform is required but was not found in PATH" >&2
  exit 1
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "aws CLI is required but was not found in PATH" >&2
  exit 1
fi

bucket_name="$(terraform -chdir="${TERRAFORM_DIR}" output -raw bucket_name)"
distribution_id="$(terraform -chdir="${TERRAFORM_DIR}" output -raw cloudfront_distribution_id)"

cd "${ROOT_DIR}"
npm run build

aws s3 sync build/ "s3://${bucket_name}" --delete
aws cloudfront create-invalidation --distribution-id "${distribution_id}" --paths "/*"
