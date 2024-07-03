import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.4.x',
  jsiiVersion: '5.4.x',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution',
  description: 'AWS CloudFront distribution for frontend web app (spa) optimized.',
  repositoryUrl: 'https://github.com/gammarers/aws-secure-frontend-web-app-cloudfront-distribution.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 'spa', 'vue', 'angular', 'react'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  majorVersion: 1,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '20.11.0',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * 0']), // every sunday 18:00 (JST/MON:0300)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-secure-frontend-web-app-cloudfront-distribution',
    module: 'gammarers.aws_secure_frontend_web_app_cloudfront_distribution',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution',
  },
});
project.synth();