import { Stack, App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { S3OriginAccessType, SecureFrontendWebAppCloudFrontDistribution } from '../src';

describe('SecureFrontendWebAppCloudFrontDistribution default testing', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');
  new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
    certificate: new acm.Certificate(stack, 'Certificate', {
      domainName: 'example.com',
    }),
    domainName: 'example.com',
    s3OriginAccessType: S3OriginAccessType.ORIGIN_ACCESS_IDENTITY,
    originAccessIdentity: new cloudfront.OriginAccessIdentity(stack, 'OriginAccessIdentity'),
    originBucket: new s3.Bucket(stack, 'OriginBucket'),
  });

  const template = Template.fromStack(stack);

  it('Should match Cloudfront Distribution', async () => {

    template.hasResourceProperties('AWS::CloudFront::Distribution', Match.objectEquals({
      DistributionConfig: {
        Enabled: true,
        DefaultRootObject: 'index.html',
        HttpVersion: 'http2and3',
        IPV6Enabled: true,
        Aliases: [
          'example.com',
        ],
        CustomErrorResponses: Match.arrayWith([
          {
            ErrorCode: 403,
            ResponseCode: 200,
            ResponsePagePath: '/index.html',
            ErrorCachingMinTTL: 300,
          },
          {
            ErrorCode: 404,
            ResponseCode: 200,
            ResponsePagePath: '/index.html',
            ErrorCachingMinTTL: 300,
          },
        ]),
        DefaultCacheBehavior: {
          AllowedMethods: Match.arrayWith([
            'GET',
            'HEAD',
            'OPTIONS',
          ]),
          CachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          CachedMethods: Match.arrayWith([
            'GET',
            'HEAD',
            'OPTIONS',
          ]),
          Compress: true,
          ViewerProtocolPolicy: 'https-only',
          ResponseHeadersPolicyId: {
            Ref: Match.stringLikeRegexp('ResponseHeadersPolicy.*'),
          },
          TargetOriginId: Match.stringLikeRegexp('TestingStackSecureFrontendWebAppCloudFrontDistributionOrigin.*'),
        },
        Origins: Match.arrayWith([
          {
            DomainName: {
              'Fn::GetAtt': [
                Match.stringLikeRegexp('OriginBucket.*'),
                'RegionalDomainName',
              ],
            },
            Id: Match.stringLikeRegexp('TestingStackSecureFrontendWebAppCloudFrontDistributionOrigin.*'),
            S3OriginConfig: {
              OriginAccessIdentity: {
                'Fn::Join': [
                  '',
                  [
                    'origin-access-identity/cloudfront/',
                    {
                      Ref: Match.stringLikeRegexp('OriginAccessIdentity.*'),
                    },
                  ],
                ],
              },
            },
          },
        ]),
        PriceClass: 'PriceClass_All',
        ViewerCertificate: {
          AcmCertificateArn: {
            Ref: Match.stringLikeRegexp('Certificate.*'),
          },
          MinimumProtocolVersion: 'TLSv1.2_2021',
          SslSupportMethod: 'sni-only',
        },
      },
    }));
  });

  it('Should match Cloudfront ResponseHeadersPolicy', async () => {

    template.hasResourceProperties('AWS::CloudFront::ResponseHeadersPolicy', Match.objectEquals({
      ResponseHeadersPolicyConfig: {
        Name: Match.stringLikeRegexp('TestingStackResponseHeadersPolicy.*'),
        Comment: 'A default policy',
        CustomHeadersConfig: {
          Items: Match.arrayWith([
            {
              Override: true,
              Header: 'Cache-Control',
              Value: 'no-cache, no-store, private',
            },
            {
              Override: true,
              Header: 'pragma',
              Value: 'no-cache',
            },
          ]),
        },
        SecurityHeadersConfig: {
          ContentTypeOptions: {
            Override: true,
          },
          FrameOptions: {
            Override: true,
            FrameOption: 'SAMEORIGIN',
          },
          ReferrerPolicy: {
            Override: true,
            ReferrerPolicy: 'strict-origin-when-cross-origin',
          },
          StrictTransportSecurity: {
            Override: true,
            AccessControlMaxAgeSec: 31536000,
            IncludeSubdomains: true,
            Preload: true,
          },
          XSSProtection: {
            Override: true,
            ModeBlock: true,
            Protection: true,
          },
        },
      },
    }));
  });

  it('Should match snapshot.', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});
