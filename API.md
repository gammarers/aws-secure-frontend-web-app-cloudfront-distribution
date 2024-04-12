# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureFrontendWebAppCloudFrontDistribution <a name="SecureFrontendWebAppCloudFrontDistribution" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution"></a>

#### Initializers <a name="Initializers" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

new SecureFrontendWebAppCloudFrontDistribution(scope: Construct, id: string, props: SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps | SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps">SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps</a> \| <a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps">SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps">SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps</a> | <a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps">SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior">addBehavior</a></code> | Adds a new behavior to this distribution for the given pathPattern. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant">grant</a></code> | Adds an IAM policy statement associated with this distribution to an IAM principal's policy. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grantCreateInvalidation">grantCreateInvalidation</a></code> | Grant to create invalidations for this bucket to an IAM principal (Role/Group/User). |

---

##### `toString` <a name="toString" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addBehavior` <a name="addBehavior" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior"></a>

```typescript
public addBehavior(pathPattern: string, origin: IOrigin, behaviorOptions?: AddBehaviorOptions): void
```

Adds a new behavior to this distribution for the given pathPattern.

###### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior.parameter.pathPattern"></a>

- *Type:* string

the path pattern (e.g., 'images/*') that specifies which requests to apply the behavior to.

---

###### `origin`<sup>Required</sup> <a name="origin" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior.parameter.origin"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.IOrigin

the origin to use for this behavior.

---

###### `behaviorOptions`<sup>Optional</sup> <a name="behaviorOptions" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior.parameter.behaviorOptions"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.AddBehaviorOptions

the options for the behavior at this path.

---

##### `grant` <a name="grant" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant"></a>

```typescript
public grant(identity: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this distribution to an IAM principal's policy.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `actions`<sup>Required</sup> <a name="actions" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant.parameter.actions"></a>

- *Type:* string

The set of actions to allow (i.e. "cloudfront:ListInvalidations").

---

##### `grantCreateInvalidation` <a name="grantCreateInvalidation" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grantCreateInvalidation"></a>

```typescript
public grantCreateInvalidation(identity: IGrantable): Grant
```

Grant to create invalidations for this bucket to an IAM principal (Role/Group/User).

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grantCreateInvalidation.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes">fromDistributionAttributes</a></code> | Creates a Distribution construct that represents an external (imported) distribution. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isOwnedResource"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isResource"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromDistributionAttributes` <a name="fromDistributionAttributes" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes(scope: Construct, id: string, attrs: DistributionAttributes)
```

Creates a Distribution construct that represents an external (imported) distribution.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.DistributionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionDomainName">distributionDomainName</a></code> | <code>string</code> | The domain name of the Distribution, such as d111111abcdef8.cloudfront.net. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionId">distributionId</a></code> | <code>string</code> | The distribution ID for this distribution. |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.domainName">domainName</a></code> | <code>string</code> | The domain name of the Distribution, such as d111111abcdef8.cloudfront.net. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `distributionDomainName`<sup>Required</sup> <a name="distributionDomainName" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionDomainName"></a>

```typescript
public readonly distributionDomainName: string;
```

- *Type:* string

The domain name of the Distribution, such as d111111abcdef8.cloudfront.net.

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The distribution ID for this distribution.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name of the Distribution, such as d111111abcdef8.cloudfront.net.

---


## Structs <a name="Structs" id="Structs"></a>

### SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps <a name="SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

const secureFrontendWebAppCloudFrontDistributionOriginAccessControlProps: SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.originAccessControlId">originAccessControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.originBucket">originBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.s3OriginAccessType">s3OriginAccessType</a></code> | <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType">S3OriginAccessType</a></code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.accessLogBucket">accessLogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.comment">comment</a></code> | <code>string</code> | *No description.* |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `originAccessControlId`<sup>Required</sup> <a name="originAccessControlId" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.originAccessControlId"></a>

```typescript
public readonly originAccessControlId: string;
```

- *Type:* string

---

##### `originBucket`<sup>Required</sup> <a name="originBucket" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.originBucket"></a>

```typescript
public readonly originBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `s3OriginAccessType`<sup>Required</sup> <a name="s3OriginAccessType" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.s3OriginAccessType"></a>

```typescript
public readonly s3OriginAccessType: S3OriginAccessType;
```

- *Type:* <a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType">S3OriginAccessType</a>

---

##### `accessLogBucket`<sup>Optional</sup> <a name="accessLogBucket" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.accessLogBucket"></a>

```typescript
public readonly accessLogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessControlProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

### SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps <a name="SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps } from '@gammarer/aws-secure-frontend-web-app-cloudfront-distribution'

const secureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps: SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.originAccessIdentity">originAccessIdentity</a></code> | <code>aws-cdk-lib.aws_cloudfront.IOriginAccessIdentity</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.originBucket">originBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.s3OriginAccessType">s3OriginAccessType</a></code> | <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType">S3OriginAccessType</a></code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.accessLogBucket">accessLogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.comment">comment</a></code> | <code>string</code> | *No description.* |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `originAccessIdentity`<sup>Required</sup> <a name="originAccessIdentity" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.originAccessIdentity"></a>

```typescript
public readonly originAccessIdentity: IOriginAccessIdentity;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IOriginAccessIdentity

---

##### `originBucket`<sup>Required</sup> <a name="originBucket" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.originBucket"></a>

```typescript
public readonly originBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `s3OriginAccessType`<sup>Required</sup> <a name="s3OriginAccessType" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.s3OriginAccessType"></a>

```typescript
public readonly s3OriginAccessType: S3OriginAccessType;
```

- *Type:* <a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType">S3OriginAccessType</a>

---

##### `accessLogBucket`<sup>Optional</sup> <a name="accessLogBucket" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.accessLogBucket"></a>

```typescript
public readonly accessLogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionOriginAccessIdentityProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### S3OriginAccessType <a name="S3OriginAccessType" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType.ORIGIN_ACCESS_IDENTITY">ORIGIN_ACCESS_IDENTITY</a></code> | *No description.* |
| <code><a href="#@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType.ORIGIN_ACCESS_CONTROL">ORIGIN_ACCESS_CONTROL</a></code> | *No description.* |

---

##### `ORIGIN_ACCESS_IDENTITY` <a name="ORIGIN_ACCESS_IDENTITY" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType.ORIGIN_ACCESS_IDENTITY"></a>

---


##### `ORIGIN_ACCESS_CONTROL` <a name="ORIGIN_ACCESS_CONTROL" id="@gammarer/aws-secure-frontend-web-app-cloudfront-distribution.S3OriginAccessType.ORIGIN_ACCESS_CONTROL"></a>

---

