# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontendWebAppCloudFrontDistribution <a name="FrontendWebAppCloudFrontDistribution" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution"></a>

#### Initializers <a name="Initializers" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer"></a>

```typescript
import { FrontendWebAppCloudFrontDistribution } from '@yicr/secure-frontend-web-app-cloudfront-distribution'

new FrontendWebAppCloudFrontDistribution(scope: Construct, id: string, props: FrontendWebAppCloudFrontDistributionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps">FrontendWebAppCloudFrontDistributionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps">FrontendWebAppCloudFrontDistributionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.isConstruct"></a>

```typescript
import { FrontendWebAppCloudFrontDistribution } from '@yicr/secure-frontend-web-app-cloudfront-distribution'

FrontendWebAppCloudFrontDistribution.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistribution.property.distribution"></a>

```typescript
public readonly distribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

---


## Structs <a name="Structs" id="Structs"></a>

### FrontendWebAppCloudFrontDistributionProps <a name="FrontendWebAppCloudFrontDistributionProps" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps"></a>

#### Initializer <a name="Initializer" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.Initializer"></a>

```typescript
import { FrontendWebAppCloudFrontDistributionProps } from '@yicr/secure-frontend-web-app-cloudfront-distribution'

const frontendWebAppCloudFrontDistributionProps: FrontendWebAppCloudFrontDistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.accessLogBucket">accessLogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.distributionDomainName">distributionDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.originAccessIdentity">originAccessIdentity</a></code> | <code>aws-cdk-lib.aws_cloudfront.IOriginAccessIdentity</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.originBucket">originBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.distributionComment">distributionComment</a></code> | <code>string</code> | *No description.* |

---

##### `accessLogBucket`<sup>Required</sup> <a name="accessLogBucket" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.accessLogBucket"></a>

```typescript
public readonly accessLogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `distributionDomainName`<sup>Required</sup> <a name="distributionDomainName" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.distributionDomainName"></a>

```typescript
public readonly distributionDomainName: string;
```

- *Type:* string

---

##### `originAccessIdentity`<sup>Required</sup> <a name="originAccessIdentity" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.originAccessIdentity"></a>

```typescript
public readonly originAccessIdentity: IOriginAccessIdentity;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IOriginAccessIdentity

---

##### `originBucket`<sup>Required</sup> <a name="originBucket" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.originBucket"></a>

```typescript
public readonly originBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `distributionComment`<sup>Optional</sup> <a name="distributionComment" id="@yicr/secure-frontend-web-app-cloudfront-distribution.FrontendWebAppCloudFrontDistributionProps.property.distributionComment"></a>

```typescript
public readonly distributionComment: string;
```

- *Type:* string

---



