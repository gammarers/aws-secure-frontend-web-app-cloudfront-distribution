[![GitHub](https://img.shields.io/github/license/yicr/aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://github.com/yicr/aws-secure-frontend-web-app-cloudfront-distribution/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarer/aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://www.npmjs.com/package/@gammarer/aws-secure-frontend-web-app-cloudfront-distribution)
[![PyPI](https://img.shields.io/pypi/v/gammarer.aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://pypi.org/project/gammarer.aws-secure-frontend-web-app-cloudfront-distribution/)
[![Nuget](https://img.shields.io/nuget/v/Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution?style=flat-square)](https://www.nuget.org/packages/Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.gammarer/aws-secure-frontend-web-app-cloudfront-distribution?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/gammarer/aws-secure-frontend-web-app-cloudfront-distribution/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/yicr/aws-secure-frontend-web-app-cloudfront-distribution/release.yml?branch=main&label=release&style=flat-square)](https://github.com/yicr/aws-secure-frontend-web-app-cloudfront-distribution/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/yicr/aws-secure-frontend-web-app-cloudfront-distribution?sort=semver&style=flat-square)](https://github.com/yicr/aws-secure-frontend-web-app-cloudfront-distribution/releases)

# AWS Secure Frontend Web App CloudFront Distribution (for AWS CDK v2)

AWS CloudFront distribution for frontend web app (spa) optimized.

## Install

### TypeScript

```shell
npm install @gammarer/aws-secure-frontend-web-app-cloudfront-distribution
# or
yarn add @gammarer/aws-secure-frontend-web-app-cloudfront-distribution
```

### Python

```shell
pip install gammarer.aws-secure-frontend-web-app-cloudfront-distribution
```

### C# / .NET

```shell
dotnet add package Gammarer.CDK.AWS.SecureFrontentWebAppCloudFrontDistribution
```

### Java
Add the following to pom.xml:

```xml
<dependency>
  <groupId>com.gammarer</groupId>
  <artifactId>aws-secure-frontend-web-app-cloudfront-distribution</artifactId>
</dependency>
```

## Example

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution';

new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
  comment: 'frontend web app distribution.', // optional
  accessLogBucket: new s3.Bucket(stack, 'LogBucket'), // optional
  certificate: new acm.Certificate(stack, 'Certificate', {
    domainName: 'example.com',
  }),
  distributionDomainName: 'example.com',
  originAccessIdentity: new cloudfront.OriginAccessIdentity(stack, 'OriginAccessIdentity'),
  originBucket: new s3.Bucket(stack, 'OriginBucket'),
});

```
