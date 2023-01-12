import { Stack, App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { FrontendWebAppCloudFrontDistribution } from '../src';

it('Has Cloudfront Distribution', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');
  new FrontendWebAppCloudFrontDistribution(stack, 'FrontendWebAppCloudFrontDistribution', {
    accessLogBucket: new s3.Bucket(stack, 'LogBucket'),
    certificate: new acm.Certificate(stack, 'Certificate', {
      domainName: 'example.com',
    }),
    distributionDomainName: 'example.com',
    originAccessIdentity: new cloudfront.OriginAccessIdentity(stack, 'OriginAccessIdentity'),
    originBucket: new s3.Bucket(stack, 'OriginBucket'),
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::CloudFront::Distribution',
    Match.objectLike({
      DistributionConfig: {
        Aliases: [
          'example.com',
        ],
        CustomErrorResponses: [
          {
            ErrorCode: 403,
            ResponseCode: 200,
            ResponsePagePath: '/index.html',
          },
          {
            ErrorCode: 404,
            ResponseCode: 200,
            ResponsePagePath: '/index.html',
          },
        ],
        DefaultCacheBehavior: {
          AllowedMethods: [
            'GET',
            'HEAD',
            'OPTIONS',
          ],
          CachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          Compress: true,
          ViewerProtocolPolicy: 'https-only',
        },
        DefaultRootObject: 'index.html',
        HttpVersion: 'http2and3',
        IPV6Enabled: true,
        Logging: {
          Bucket: {},
          Prefix: 'example.com/',
        },
        Origins: [
          {
            DomainName: {},
            S3OriginConfig: {
              OriginAccessIdentity: {},
            },
          },
        ],
        PriceClass: 'PriceClass_All',
        ViewerCertificate: {
          AcmCertificateArn: {},
          MinimumProtocolVersion: 'TLSv1.2_2021',
          SslSupportMethod: 'sni-only',
        },
      },
    }));
});