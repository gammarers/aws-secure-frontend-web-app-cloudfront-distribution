# AWS Secure Frontend Web App CloudFront Distribution (for AWS CDK v2)

AWS CloudFront distribution for frontend web app (spa) optimized.

## Install

### TypeScript

```shell
npm install @yicr/aws-secure-frontend-web-app-cloudfront-distribution
```
or
```shell
yarn add @yicr/aws-secure-frontend-web-app-cloudfront-distribution
```

## Example

```shell
npm install @yicr/aws-secure-frontend-web-app-cloudfront-distribution
```

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@yicr/aws-secure-frontend-web-app-cloudfront-distribution';

new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
  accessLogBucket: new s3.Bucket(stack, 'LogBucket'),
  certificate: new acm.Certificate(stack, 'Certificate', {
    domainName: 'example.com',
  }),
  distributionDomainName: 'example.com',
  originAccessIdentity: new cloudfront.OriginAccessIdentity(stack, 'OriginAccessIdentity'),
  originBucket: new s3.Bucket(stack, 'OriginBucket'),
});

```
