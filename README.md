# AWS Secure Frontend Web App CloudFront Distribution (for AWS CDK v2)

[![GitHub](https://img.shields.io/github/license/gammarer/aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://github.com/gammarer/aws-secure-frontend-web-app-cloudfront-distribution/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarer/aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://www.npmjs.com/package/@gammarer/aws-secure-frontend-web-app-cloudfront-distribution)
[![PyPI](https://img.shields.io/pypi/v/gammarer.aws-secure-frontend-web-app-cloudfront-distribution?style=flat-square)](https://pypi.org/project/gammarer.aws-secure-frontend-web-app-cloudfront-distribution/)
[![Nuget](https://img.shields.io/nuget/v/Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution?style=flat-square)](https://www.nuget.org/packages/Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.gammarer/aws-secure-frontend-web-app-cloudfront-distribution?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/gammarer/aws-secure-frontend-web-app-cloudfront-distribution/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarer/aws-secure-frontend-web-app-cloudfront-distribution/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarer/aws-secure-frontend-web-app-cloudfront-distribution/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarer/aws-secure-frontend-web-app-cloudfront-distribution?sort=semver&style=flat-square)](https://github.com/gammarer/aws-secure-frontend-web-app-cloudfront-distribution/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarer/aws-secure-frontend-web-app-cloudfront-distribution)](https://constructs.dev/packages/@gammarer/aws-secure-frontend-web-app-cloudfront-distribution)

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
dotnet add package Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution
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

### for Origin Access Control

```typescript
import { SecureFrontendWebAppCloudFrontDistribution, S3OriginAccessType } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution';

declare const originBucket: s3.Bucket;
declare const accessLogBucket: s3.Bucket;
declare const certificate: acm.Certificate;
declare const cfnOriginAccessControl: cloudfront.CfnOriginAccessControl

new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
  comment: 'frontend web app distribution.', // optional
  accessLogBucket: accessLogBucket, // optional
  certificate: certificate,
  distributionDomainName: 'example.com',
  s3OriginAccessType: S3OriginAccessType.ORIGIN_ACCESS_CONTROL,
  originAccessControlId: cfnOriginAccessControl.attrId,
  originBucket: originBucket,
});
```

### for Origin Access Identity

```typescript
import { SecureFrontendWebAppCloudFrontDistribution, S3OriginAccessType } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution';

declare const originBucket: s3.Bucket;
declare const accessLogBucket: s3.Bucket;
declare const certificate: acm.Certificate;
declare const originAccessIdentity: cloudfront.OriginAccessIdentity;

new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
  comment: 'frontend web app distribution.', // optional
  accessLogBucket: accessLogBucket, // optional
  certificate: certificate,
  distributionDomainName: 'example.com',
  s3OriginAccessType: S3OriginAccessType.ORIGIN_ACCESS_IDENTITY,
  originAccessIdentity: originAccessIdentity,
  originBucket: originBucket,
});
```

## License

This project is licensed under the Apache-2.0 License.
