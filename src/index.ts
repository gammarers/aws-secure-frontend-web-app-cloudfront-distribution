import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export enum S3OriginAccessType {
  ORIGIN_ACCESS_IDENTITY,
  ORIGIN_ACCESS_CONTROL,
}

interface BaseSecureFrontendWebAppCloudFrontDistributionProps {
  readonly comment?: string;
  readonly domainName: string;
  readonly s3OriginAccessType: S3OriginAccessType;
  readonly certificate: acm.ICertificate;
  readonly originBucket: s3.IBucket;
  readonly accessLogBucket?: s3.IBucket;
}

export interface SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps extends BaseSecureFrontendWebAppCloudFrontDistributionProps {
  readonly s3OriginAccessType: S3OriginAccessType.ORIGIN_ACCESS_IDENTITY;
  readonly originAccessIdentity: cloudfront.IOriginAccessIdentity;
}

export interface SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps extends BaseSecureFrontendWebAppCloudFrontDistributionProps {
  readonly s3OriginAccessType: S3OriginAccessType.ORIGIN_ACCESS_CONTROL;
  readonly originAccessControlId: string;
}

export class SecureFrontendWebAppCloudFrontDistribution extends cloudfront.Distribution {

  // eslint-disable-next-line max-len
  constructor(scope: Construct, id: string, props: SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps | SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps) {
    super(scope, id, {
      enabled: true,
      comment: props.comment,
      defaultRootObject: 'index.html',
      certificate: props.certificate,
      domainNames: [props.domainName],
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      sslSupportMethod: cloudfront.SSLMethod.SNI,
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
      // webAclId: props.wafAclId,
      logBucket: props.accessLogBucket,
      logFilePrefix: props.accessLogBucket ? `${props.domainName}/` : undefined,
      defaultBehavior: {
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY,
        origin: (() => {
          switch (props.s3OriginAccessType) {
            case S3OriginAccessType.ORIGIN_ACCESS_IDENTITY:
              return new origins.S3Origin(props.originBucket, {
                originAccessIdentity: props.originAccessIdentity,
              });
            case S3OriginAccessType.ORIGIN_ACCESS_CONTROL:
              return new origins.S3Origin(props.originBucket);
          }
        })(),
        responseHeadersPolicy: new cloudfront.ResponseHeadersPolicy(scope, 'ResponseHeadersPolicy', {
          //responseHeadersPolicyName: ,
          comment: 'A default policy',
          securityHeadersBehavior: {
            //contentSecurityPolicy: { contentSecurityPolicy: 'default-src https:;', override: true },
            contentTypeOptions: { override: true },
            frameOptions: {
              frameOption: cloudfront.HeadersFrameOption.SAMEORIGIN,
              override: true,
            },
            referrerPolicy: {
              referrerPolicy: cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
              override: true,
            },
            strictTransportSecurity: {
              accessControlMaxAge: cdk.Duration.seconds(31536000), // 1 year
              preload: true,
              includeSubdomains: true,
              override: true,
            },
            xssProtection: {
              protection: true,
              modeBlock: true,
              override: true,
            },
          },
          customHeadersBehavior: {
            customHeaders: [
              {
                header: 'Cache-Control',
                value: 'no-cache, no-store, private',
                override: true,
              },
              {
                header: 'pragma',
                value: 'no-cache',
                override: true,
              },
            ],
          },
        }),
      },
      errorResponses: [
        {
          ttl: cdk.Duration.seconds(300),
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
        {
          ttl: cdk.Duration.seconds(300),
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
    });

    if (props.s3OriginAccessType === S3OriginAccessType.ORIGIN_ACCESS_CONTROL) {
      const cfnDistribution = this.node.defaultChild as cloudfront.CfnDistribution;
      cfnDistribution.addPropertyOverride('DistributionConfig.Origins.0.OriginAccessControlId', props.originAccessControlId);
      cfnDistribution.addPropertyOverride('DistributionConfig.Origins.0.DomainName', props.originBucket.bucketRegionalDomainName);
      cfnDistribution.addOverride('Properties.DistributionConfig.Origins.0.S3OriginConfig.OriginAccessIdentity', '');
      cfnDistribution.addPropertyDeletionOverride('DistributionConfig.Origins.0.CustomOriginConfig');
    }
  }
}