# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureFrontendWebAppCloudFrontDistribution <a name="SecureFrontendWebAppCloudFrontDistribution" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution'

new SecureFrontendWebAppCloudFrontDistribution(scope: Construct, id: string, props: SecureFrontendWebAppCloudFrontDistributionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps">SecureFrontendWebAppCloudFrontDistributionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps">SecureFrontendWebAppCloudFrontDistributionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior">addBehavior</a></code> | Adds a new behavior to this distribution for the given pathPattern. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.attachWebAclId">attachWebAclId</a></code> | Attach WAF WebACL to this CloudFront distribution. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant">grant</a></code> | Adds an IAM policy statement associated with this distribution to an IAM principal's policy. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grantCreateInvalidation">grantCreateInvalidation</a></code> | Grant to create invalidations for this bucket to an IAM principal (Role/Group/User). |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric">metric</a></code> | Return the given named metric for this Distribution. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric401ErrorRate">metric401ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 401. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric403ErrorRate">metric403ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 403. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric404ErrorRate">metric404ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 404. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric4xxErrorRate">metric4xxErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric502ErrorRate">metric502ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 502. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric503ErrorRate">metric503ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 503. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric504ErrorRate">metric504ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 504. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric5xxErrorRate">metric5xxErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 5xx. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricBytesDownloaded">metricBytesDownloaded</a></code> | Metric for the total number of bytes downloaded by viewers for GET, HEAD, and OPTIONS requests. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricBytesUploaded">metricBytesUploaded</a></code> | Metric for the total number of bytes that viewers uploaded to your origin with CloudFront, using POST and PUT requests. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricCacheHitRate">metricCacheHitRate</a></code> | Metric for the percentage of all cacheable requests for which CloudFront served the content from its cache. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricOriginLatency">metricOriginLatency</a></code> | Metric for the total time spent from when CloudFront receives a request to when it starts providing a response to the network (not the viewer), for requests that are served from the origin, not the CloudFront cache. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricRequests">metricRequests</a></code> | Metric for the total number of viewer requests received by CloudFront, for all HTTP methods and for both HTTP and HTTPS requests. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricTotalErrorRate">metricTotalErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx or 5xx. |

---

##### `toString` <a name="toString" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addBehavior` <a name="addBehavior" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior"></a>

```typescript
public addBehavior(pathPattern: string, origin: IOrigin, behaviorOptions?: AddBehaviorOptions): void
```

Adds a new behavior to this distribution for the given pathPattern.

###### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior.parameter.pathPattern"></a>

- *Type:* string

the path pattern (e.g., 'images/*') that specifies which requests to apply the behavior to.

---

###### `origin`<sup>Required</sup> <a name="origin" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior.parameter.origin"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.IOrigin

the origin to use for this behavior.

---

###### `behaviorOptions`<sup>Optional</sup> <a name="behaviorOptions" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.addBehavior.parameter.behaviorOptions"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.AddBehaviorOptions

the options for the behavior at this path.

---

##### `attachWebAclId` <a name="attachWebAclId" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.attachWebAclId"></a>

```typescript
public attachWebAclId(webAclId: string): void
```

Attach WAF WebACL to this CloudFront distribution.

WebACL must be in the us-east-1 region

###### `webAclId`<sup>Required</sup> <a name="webAclId" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.attachWebAclId.parameter.webAclId"></a>

- *Type:* string

The WAF WebACL to associate with this distribution.

---

##### `grant` <a name="grant" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant"></a>

```typescript
public grant(identity: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this distribution to an IAM principal's policy.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `actions`<sup>Required</sup> <a name="actions" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grant.parameter.actions"></a>

- *Type:* ...string[]

The set of actions to allow (i.e. "cloudfront:ListInvalidations").

---

##### `grantCreateInvalidation` <a name="grantCreateInvalidation" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grantCreateInvalidation"></a>

```typescript
public grantCreateInvalidation(identity: IGrantable): Grant
```

Grant to create invalidations for this bucket to an IAM principal (Role/Group/User).

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.grantCreateInvalidation.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

##### `metric` <a name="metric" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Distribution.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric401ErrorRate` <a name="metric401ErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric401ErrorRate"></a>

```typescript
public metric401ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 401.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric401ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric403ErrorRate` <a name="metric403ErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric403ErrorRate"></a>

```typescript
public metric403ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 403.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric403ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric404ErrorRate` <a name="metric404ErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric404ErrorRate"></a>

```typescript
public metric404ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 404.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric404ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric4xxErrorRate` <a name="metric4xxErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric4xxErrorRate"></a>

```typescript
public metric4xxErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric4xxErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric502ErrorRate` <a name="metric502ErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric502ErrorRate"></a>

```typescript
public metric502ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 502.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric502ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric503ErrorRate` <a name="metric503ErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric503ErrorRate"></a>

```typescript
public metric503ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 503.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric503ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric504ErrorRate` <a name="metric504ErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric504ErrorRate"></a>

```typescript
public metric504ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 504.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric504ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric5xxErrorRate` <a name="metric5xxErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric5xxErrorRate"></a>

```typescript
public metric5xxErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 5xx.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metric5xxErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBytesDownloaded` <a name="metricBytesDownloaded" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricBytesDownloaded"></a>

```typescript
public metricBytesDownloaded(props?: MetricOptions): Metric
```

Metric for the total number of bytes downloaded by viewers for GET, HEAD, and OPTIONS requests.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricBytesDownloaded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBytesUploaded` <a name="metricBytesUploaded" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricBytesUploaded"></a>

```typescript
public metricBytesUploaded(props?: MetricOptions): Metric
```

Metric for the total number of bytes that viewers uploaded to your origin with CloudFront, using POST and PUT requests.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricBytesUploaded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCacheHitRate` <a name="metricCacheHitRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricCacheHitRate"></a>

```typescript
public metricCacheHitRate(props?: MetricOptions): Metric
```

Metric for the percentage of all cacheable requests for which CloudFront served the content from its cache.

HTTP POST and PUT requests, and errors, are not considered cacheable requests.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricCacheHitRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOriginLatency` <a name="metricOriginLatency" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricOriginLatency"></a>

```typescript
public metricOriginLatency(props?: MetricOptions): Metric
```

Metric for the total time spent from when CloudFront receives a request to when it starts providing a response to the network (not the viewer), for requests that are served from the origin, not the CloudFront cache.

This is also known as first byte latency, or time-to-first-byte.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricOriginLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRequests` <a name="metricRequests" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricRequests"></a>

```typescript
public metricRequests(props?: MetricOptions): Metric
```

Metric for the total number of viewer requests received by CloudFront, for all HTTP methods and for both HTTP and HTTPS requests.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalErrorRate` <a name="metricTotalErrorRate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricTotalErrorRate"></a>

```typescript
public metricTotalErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx or 5xx.

###### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.metricTotalErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes">fromDistributionAttributes</a></code> | Creates a Distribution construct that represents an external (imported) distribution. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isOwnedResource"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isResource"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromDistributionAttributes` <a name="fromDistributionAttributes" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistribution } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution'

SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes(scope: Construct, id: string, attrs: DistributionAttributes)
```

Creates a Distribution construct that represents an external (imported) distribution.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.fromDistributionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.DistributionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionArn">distributionArn</a></code> | <code>string</code> | The distribution ARN for this distribution. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionDomainName">distributionDomainName</a></code> | <code>string</code> | The domain name of the Distribution, such as d111111abcdef8.cloudfront.net. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionId">distributionId</a></code> | <code>string</code> | The distribution ID for this distribution. |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.domainName">domainName</a></code> | <code>string</code> | The domain name of the Distribution, such as d111111abcdef8.cloudfront.net. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `distributionArn`<sup>Required</sup> <a name="distributionArn" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionArn"></a>

```typescript
public readonly distributionArn: string;
```

- *Type:* string

The distribution ARN for this distribution.

---

##### `distributionDomainName`<sup>Required</sup> <a name="distributionDomainName" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionDomainName"></a>

```typescript
public readonly distributionDomainName: string;
```

- *Type:* string

The domain name of the Distribution, such as d111111abcdef8.cloudfront.net.

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The distribution ID for this distribution.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistribution.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name of the Distribution, such as d111111abcdef8.cloudfront.net.

---


## Structs <a name="Structs" id="Structs"></a>

### SecureFrontendWebAppCloudFrontDistributionProps <a name="SecureFrontendWebAppCloudFrontDistributionProps" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.Initializer"></a>

```typescript
import { SecureFrontendWebAppCloudFrontDistributionProps } from '@gammarers/aws-secure-frontend-web-app-cloudfront-distribution'

const secureFrontendWebAppCloudFrontDistributionProps: SecureFrontendWebAppCloudFrontDistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.originBucket">originBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.accessLogBucket">accessLogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.priceClass">priceClass</a></code> | <code>aws-cdk-lib.aws_cloudfront.PriceClass</code> | *No description.* |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `originBucket`<sup>Required</sup> <a name="originBucket" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.originBucket"></a>

```typescript
public readonly originBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `accessLogBucket`<sup>Optional</sup> <a name="accessLogBucket" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.accessLogBucket"></a>

```typescript
public readonly accessLogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `priceClass`<sup>Optional</sup> <a name="priceClass" id="@gammarers/aws-secure-frontend-web-app-cloudfront-distribution.SecureFrontendWebAppCloudFrontDistributionProps.property.priceClass"></a>

```typescript
public readonly priceClass: PriceClass;
```

- *Type:* aws-cdk-lib.aws_cloudfront.PriceClass

---



