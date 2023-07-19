import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.43.0',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution',
  description: 'AWS CloudFront distribution for frontend web app (spa) optimized.',
  repositoryUrl: 'https://github.com/yicr/aws-secure-frontend-web-app-cloudfront-distribution.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 'spa', 'vue', 'angular', 'react'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-secure-frontend-web-app-cloudfront-distribution',
    module: 'gammarer.aws_secure_frontend_web_app_cloudfront_distribution',
  },
});
project.synth();