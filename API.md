# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureFrontendWebAppCloudFrontDistribution <a name="SecureFrontendWebAppCloudFrontDistribution" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution"></a>

#### Initializers <a name="Initializers" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@yicr/secure-frontend-web-app-cloudfront-distribution'

new SecureFrontendWebAppCloudFrontDistribution(scope: Construct, id: string, props: SecureFrontendWebAppCloudFrontDistributionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps">SecureFrontendWebAppCloudFrontDistributionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps">SecureFrontendWebAppCloudFrontDistributionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@yicr/secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distribution"></a>

```typescript
public readonly distribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

---


## Structs <a name="Structs" id="Structs"></a>

### SecureFrontendWebAppCloudFrontDistributionProps <a name="SecureFrontendWebAppCloudFrontDistributionProps" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps"></a>

#### Initializer <a name="Initializer" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistributionProps } from '@yicr/secure-frontend-web-app-cloudfront-distribution'

const secureFrontendWebAppCloudFrontDistributionProps: SecureFrontendWebAppCloudFrontDistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.accessLogBucket">accessLogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.distributionDomainName">distributionDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.originAccessIdentity">originAccessIdentity</a></code> | <code>aws-cdk-lib.aws_cloudfront.IOriginAccessIdentity</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.originBucket">originBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.distributionComment">distributionComment</a></code> | <code>string</code> | *No description.* |

---

##### `accessLogBucket`<sup>Required</sup> <a name="accessLogBucket" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.accessLogBucket"></a>

```typescript
public readonly accessLogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `distributionDomainName`<sup>Required</sup> <a name="distributionDomainName" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.distributionDomainName"></a>

```typescript
public readonly distributionDomainName: string;
```

- *Type:* string

---

##### `originAccessIdentity`<sup>Required</sup> <a name="originAccessIdentity" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.originAccessIdentity"></a>

```typescript
public readonly originAccessIdentity: IOriginAccessIdentity;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IOriginAccessIdentity

---

##### `originBucket`<sup>Required</sup> <a name="originBucket" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.originBucket"></a>

```typescript
public readonly originBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `distributionComment`<sup>Optional</sup> <a name="distributionComment" id="@yicr/secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.distributionComment"></a>

```typescript
public readonly distributionComment: string;
```

- *Type:* string

---



