import { Stack, App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { S3OriginAccessType, SecureFrontendWebAppCloudFrontDistribution } from '../src';

describe('SecureFrontendWebAppCloudFrontDistribution specific testing', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const cfnOriginAccessControl = new cloudfront.CfnOriginAccessControl(stack, 'OriginAccessControl', {
    originAccessControlConfig: {
      name: 'OriginAccessControlForContentsBucket',
      originAccessControlOriginType: 's3',
      signingBehavior: 'always',
      signingProtocol: 'sigv4',
      description: 'Access Control',
    },
  });

  new SecureFrontendWebAppCloudFrontDistribution(stack, 'SecureFrontendWebAppCloudFrontDistribution', {
    comment: 'frontend web app distribution.',
    accessLogBucket: new s3.Bucket(stack, 'LogBucket'),
    certificate: new acm.Certificate(stack, 'Certificate', {
      domainName: 'example.com',
    }),
    domainName: 'example.com',
    s3OriginAccessType: S3OriginAccessType.ORIGIN_ACCESS_CONTROL,
    originAccessControlId: cfnOriginAccessControl.attrId,
    originBucket: new s3.Bucket(stack, 'OriginBucket'),
  });

  const template = Template.fromStack(stack);

  it('Should match Cloudfront Distribution', async () => {

    template.hasResourceProperties('AWS::CloudFront::Distribution', Match.objectEquals({
      DistributionConfig: {
        Enabled: true,
        Comment: 'frontend web app distribution.',
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
            OriginAccessControlId: {
              'Fn::GetAtt': [
                'OriginAccessControl',
                'Id',
              ],
            },
            S3OriginConfig: {
              OriginAccessIdentity: '',
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
        Logging: {
          Bucket: {
            'Fn::GetAtt': [
              Match.stringLikeRegexp('LogBucket.*'),
              'RegionalDomainName',
            ],
          },
          Prefix: 'example.com/',
        },
      },
    }));
  });

  it('Should match snapshot.', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});
