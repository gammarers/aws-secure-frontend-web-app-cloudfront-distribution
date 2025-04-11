# AWS Secure Frontend Web App CloudFront Distribution (for AWS CDK v2)

[![GitHub](https://img.shields.io/github/license/gammarers/aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://github.com/gammarers/aws-secure-frontend-web-app-cloudfront-distribution/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-secure-frontend-web-app-cloudfront-distribution)
[![PyPI](https://img.shields.io/pypi/v/gammarers.aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://pypi.org/project/gammarers.aws-secure-frontend-web-app-cloudfront-distribution/)
[![Nuget](https://img.shields.io/nuget/v/Gammarers.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution?style=flat-square)](https://www.nuget.org/packages/Gammarers.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-secure-frontend-web-app-cloudfront-distribution/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-secure-frontend-web-app-cloudfront-distribution/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-secure-frontend-web-app-cloudfront-distribution?sort=semver&style=flat-square)](https://github.com/gammarers/aws-secure-frontend-web-app-cloudfront-distribution/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-secure-frontend-web-app-cloudfront-distribution)](https://constructs.dev/packages/@gammarers/aws-secure-frontend-web-app-cloudfront-distribution)

AWS CloudFront distribution for frontend web app (spa) optimized.

## Install

### TypeScript

#### npm

```shell
npm install @gammarers/aws-secure-frontend-web-app-cloudfront-distribution
```

#### yarn

```shell
yarn add @gammarers/aws-secure-frontend-web-app-cloudfront-distribution
```

### Python

```shell
pip install gammarers.aws-secure-frontend-web-app-cloudfront-distribution
```

### C# / .NET

```shell
dotnet add package Gammarers.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution
```

## Example

### for Origin Access Control

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution';

declare const originBucket: s3.Bucket;
declare const accessLogBucket: s3.Bucket;
declare const certificate: acm.Certificate;

new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
  comment: 'frontend web app distribution.', // optional
  accessLogBucket: accessLogBucket, // optional
  certificate: certificate,
  distributionDomainName: 'example.com',
  originBucket: originBucket,
});
```

## License

This project is licensed under the Apache-2.0 License.
