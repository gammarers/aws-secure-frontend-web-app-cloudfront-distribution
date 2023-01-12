const { awscdk, javascript } = require('projen');

const PROJECT_NAME = '@yicr/secure-frontend-web-app-cloudfront-distribution';
const PROJECT_DESCRIPTION = 'AWS CloudFront distribution for frontend web app (spa) optimized.';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.43.0',
  defaultReleaseBranch: 'main',
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repositoryUrl: 'https://github.com/yicr/secure-frontend-web-app-cloudfront-distribution.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 'vue', 'angular', 'react'],
  releaseEveryCommit: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();