import { awscdk, javascript } from 'projen';

const PROJECT_NAME = '@yicr/secure-frontend-web-app-cloudfront-distribution';
const PROJECT_DESCRIPTION = 'AWS CloudFront distribution for frontend web app (spa) optimized.';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.43.0',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repositoryUrl: 'https://github.com/yicr/secure-frontend-web-app-cloudfront-distribution.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 'spa', 'vue', 'angular', 'react'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
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
});
project.synth();