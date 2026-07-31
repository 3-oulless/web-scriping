# BackendAsServiceSdk TypeScript SDK 1.0.0

Welcome to the BackendAsServiceSdk SDK documentation. This guide will help you get started with integrating and using the BackendAsServiceSdk SDK in your project.

## Versions

- SDK version: `1.0.0`

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token Authentication](#access-token-authentication)
- [Setting a Custom Timeout](#setting-a-custom-timeout)
- [Sample Usage](#sample-usage)
- [Services](#services)
- [Models](#models)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm` or `yarn`:

```bash
npm install backend-as-service-sdk
```

or

```bash
yarn add backend-as-service-sdk
```

## Authentication

### Access Token Authentication

The BackendAsServiceSdk API uses an Access Token for authentication.

This token must be provided to authenticate your requests to the API.

#### Setting the Access Token

When you initialize the SDK, you can set the access token as follows:

```ts
const sdk = new BackendAsServiceSdk({ token: 'YOUR_TOKEN' });
```

If you need to set or update the access token after initializing the SDK, you can use:

```ts
const sdk = new BackendAsServiceSdk();
sdk.token = 'YOUR_TOKEN';
```

## Setting a Custom Timeout

You can set a custom timeout for the SDK's HTTP requests as follows:

```ts
const backendAsServiceSdk = new BackendAsServiceSdk({ timeout: 10000 });
```

# Sample Usage

Below is a comprehensive example demonstrating how to authenticate and call a simple endpoint:

```ts
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.logout();

  console.log(data);
})();
```

## Services

The SDK provides various services to interact with the API.

<details>
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                                               |
| :--------------------------------------------------------------------------------- |
| [BackendAsServiceSdkService](documentation/services/BackendAsServiceSdkService.md) |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details>
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                                     | Description |
| :------------------------------------------------------------------------------------------------------- | :---------- |
| [LoginRequest](documentation/models/LoginRequest.md)                                                     |             |
| [ChangePasswordRequest](documentation/models/ChangePasswordRequest.md)                                   |             |
| [BackendAsServiceSdkCreateRequest1](documentation/models/BackendAsServiceSdkCreateRequest1.md)           |             |
| [BackendAsServiceSdkGetRequest1](documentation/models/BackendAsServiceSdkGetRequest1.md)                 |             |
| [BackendAsServiceSdkUpdateRequest1](documentation/models/BackendAsServiceSdkUpdateRequest1.md)           |             |
| [BackendAsServiceSdkDeActivateRequest1](documentation/models/BackendAsServiceSdkDeActivateRequest1.md)   |             |
| [BackendAsServiceSdkDeleteRequest1](documentation/models/BackendAsServiceSdkDeleteRequest1.md)           |             |
| [BackendAsServiceSdkActivateRequest1](documentation/models/BackendAsServiceSdkActivateRequest1.md)       |             |
| [BackendAsServiceSdkRegisterRequest1](documentation/models/BackendAsServiceSdkRegisterRequest1.md)       |             |
| [SendOtpRequest](documentation/models/SendOtpRequest.md)                                                 |             |
| [BackendAsServiceSdkCreateRequest2](documentation/models/BackendAsServiceSdkCreateRequest2.md)           |             |
| [BackendAsServiceSdkUpdateRequest2](documentation/models/BackendAsServiceSdkUpdateRequest2.md)           |             |
| [ListByTenantRequest](documentation/models/ListByTenantRequest.md)                                       |             |
| [BackendAsServiceSdkDeleteRequest2](documentation/models/BackendAsServiceSdkDeleteRequest2.md)           |             |
| [BackendAsServiceSdkRegisterRequest2](documentation/models/BackendAsServiceSdkRegisterRequest2.md)       |             |
| [BackendAsServiceSdkUpdateRequest3](documentation/models/BackendAsServiceSdkUpdateRequest3.md)           |             |
| [BackendAsServiceSdkListRequest1](documentation/models/BackendAsServiceSdkListRequest1.md)               |             |
| [BackendAsServiceSdkDeActivateRequest2](documentation/models/BackendAsServiceSdkDeActivateRequest2.md)   |             |
| [BackendAsServiceSdkActivateRequest2](documentation/models/BackendAsServiceSdkActivateRequest2.md)       |             |
| [TokensissueRequest](documentation/models/TokensissueRequest.md)                                         |             |
| [TokensListRequest](documentation/models/TokensListRequest.md)                                           |             |
| [TokensRevokeRequest](documentation/models/TokensRevokeRequest.md)                                       |             |
| [BackendAsServiceSdkCreateRequest3](documentation/models/BackendAsServiceSdkCreateRequest3.md)           |             |
| [BackendAsServiceSdkUpdateRequest4](documentation/models/BackendAsServiceSdkUpdateRequest4.md)           |             |
| [BackendAsServiceSdkGetRequest2](documentation/models/BackendAsServiceSdkGetRequest2.md)                 |             |
| [BackendAsServiceSdkListRequest2](documentation/models/BackendAsServiceSdkListRequest2.md)               |             |
| [GetByKeyRequest](documentation/models/GetByKeyRequest.md)                                               |             |
| [BackendAsServiceSdkActiveRequest1](documentation/models/BackendAsServiceSdkActiveRequest1.md)           |             |
| [DeActiveRequest](documentation/models/DeActiveRequest.md)                                               |             |
| [BackendAsServiceSdkDeleteRequest3](documentation/models/BackendAsServiceSdkDeleteRequest3.md)           |             |
| [BackendAsServiceSdkCreateRequest4](documentation/models/BackendAsServiceSdkCreateRequest4.md)           |             |
| [CreateRequestConditions](documentation/models/CreateRequestConditions.md)                               |             |
| [BackendAsServiceSdkUpdateRequest5](documentation/models/BackendAsServiceSdkUpdateRequest5.md)           |             |
| [UpdateRequestConditions](documentation/models/UpdateRequestConditions.md)                               |             |
| [BackendAsServiceSdkGetRequest3](documentation/models/BackendAsServiceSdkGetRequest3.md)                 |             |
| [BackendAsServiceSdkDeleteRequest4](documentation/models/BackendAsServiceSdkDeleteRequest4.md)           |             |
| [BackendAsServiceSdkListRequest3](documentation/models/BackendAsServiceSdkListRequest3.md)               |             |
| [BackendAsServiceSdkUpdateRequest6](documentation/models/BackendAsServiceSdkUpdateRequest6.md)           |             |
| [RevokeRequest](documentation/models/RevokeRequest.md)                                                   |             |
| [BackendAsServiceSdkListRequest4](documentation/models/BackendAsServiceSdkListRequest4.md)               |             |
| [DetailRequest](documentation/models/DetailRequest.md)                                                   |             |
| [BackendAsServiceSdkCountRequest1](documentation/models/BackendAsServiceSdkCountRequest1.md)             |             |
| [BackendAsServiceSdkCountTenantRequest1](documentation/models/BackendAsServiceSdkCountTenantRequest1.md) |             |
| [BackendAsServiceSdkDeActivateRequest3](documentation/models/BackendAsServiceSdkDeActivateRequest3.md)   |             |
| [BackendAsServiceSdkActiveRequest2](documentation/models/BackendAsServiceSdkActiveRequest2.md)           |             |
| [SendRequest](documentation/models/SendRequest.md)                                                       |             |
| [StatsRequest](documentation/models/StatsRequest.md)                                                     |             |
| [AppStatsRequest](documentation/models/AppStatsRequest.md)                                               |             |
| [ByRegionRequest](documentation/models/ByRegionRequest.md)                                               |             |
| [ByBrandRequest](documentation/models/ByBrandRequest.md)                                                 |             |
| [ByPlatformRequest](documentation/models/ByPlatformRequest.md)                                           |             |
| [ByOperatorRequest](documentation/models/ByOperatorRequest.md)                                           |             |
| [ByVersionRequest](documentation/models/ByVersionRequest.md)                                             |             |
| [LogByTenantRequest](documentation/models/LogByTenantRequest.md)                                         |             |
| [LogByAppRequest](documentation/models/LogByAppRequest.md)                                               |             |
| [BackendAsServiceSdkCreateRequest5](documentation/models/BackendAsServiceSdkCreateRequest5.md)           |             |
| [BackendAsServiceSdkUpdateRequest7](documentation/models/BackendAsServiceSdkUpdateRequest7.md)           |             |
| [BackendAsServiceSdkListRequest5](documentation/models/BackendAsServiceSdkListRequest5.md)               |             |
| [BackendAsServiceSdkDeleteRequest5](documentation/models/BackendAsServiceSdkDeleteRequest5.md)           |             |
| [BackendAsServiceSdkCreateRequest6](documentation/models/BackendAsServiceSdkCreateRequest6.md)           |             |
| [CreateRequestModel](documentation/models/CreateRequestModel.md)                                         |             |
| [CreateRequestModelImageOnly](documentation/models/CreateRequestModelImageOnly.md)                       |             |
| [CreateRequestTarget](documentation/models/CreateRequestTarget.md)                                       |             |
| [BackendAsServiceSdkGetRequest4](documentation/models/BackendAsServiceSdkGetRequest4.md)                 |             |
| [BackendAsServiceSdkUpdateRequest8](documentation/models/BackendAsServiceSdkUpdateRequest8.md)           |             |
| [UpdateRequestModel](documentation/models/UpdateRequestModel.md)                                         |             |
| [UpdateRequestModelImageOnly](documentation/models/UpdateRequestModelImageOnly.md)                       |             |
| [UpdateRequestTarget](documentation/models/UpdateRequestTarget.md)                                       |             |
| [ListByAppRequest](documentation/models/ListByAppRequest.md)                                             |             |
| [ListByProjectRequest](documentation/models/ListByProjectRequest.md)                                     |             |
| [BackendAsServiceSdkDeleteRequest6](documentation/models/BackendAsServiceSdkDeleteRequest6.md)           |             |
| [BackendAsServiceSdkListRequest6](documentation/models/BackendAsServiceSdkListRequest6.md)               |             |
| [BackendAsServiceSdkGetRequest5](documentation/models/BackendAsServiceSdkGetRequest5.md)                 |             |
| [BackendAsServiceSdkDeleteRequest7](documentation/models/BackendAsServiceSdkDeleteRequest7.md)           |             |
| [UnlockRequest](documentation/models/UnlockRequest.md)                                                   |             |
| [RevokeSessionsRequest](documentation/models/RevokeSessionsRequest.md)                                   |             |
| [TokensRequest](documentation/models/TokensRequest.md)                                                   |             |
| [StatsTotalRequest](documentation/models/StatsTotalRequest.md)                                           |             |
| [NewLast7DaysRequest](documentation/models/NewLast7DaysRequest.md)                                       |             |
| [ActiveTodayRequest](documentation/models/ActiveTodayRequest.md)                                         |             |
| [ActiveTokensRequest](documentation/models/ActiveTokensRequest.md)                                       |             |
| [BackendAsServiceSdkCreateRequest7](documentation/models/BackendAsServiceSdkCreateRequest7.md)           |             |
| [BackendAsServiceSdkUpdateRequest9](documentation/models/BackendAsServiceSdkUpdateRequest9.md)           |             |
| [BackendAsServiceSdkGetRequest6](documentation/models/BackendAsServiceSdkGetRequest6.md)                 |             |
| [BackendAsServiceSdkDeleteRequest8](documentation/models/BackendAsServiceSdkDeleteRequest8.md)           |             |
| [AccessByRoleRequest](documentation/models/AccessByRoleRequest.md)                                       |             |
| [UpdateAccessRequest](documentation/models/UpdateAccessRequest.md)                                       |             |
| [BackendAsServiceSdkRegisterRequest3](documentation/models/BackendAsServiceSdkRegisterRequest3.md)       |             |
| [BackendAsServiceSdkUpdateRequest10](documentation/models/BackendAsServiceSdkUpdateRequest10.md)         |             |
| [BackendAsServiceSdkDeActivateRequest4](documentation/models/BackendAsServiceSdkDeActivateRequest4.md)   |             |
| [SendPushRequest](documentation/models/SendPushRequest.md)                                               |             |
| [Data](documentation/models/Data.md)                                                                     |             |
| [Targeting](documentation/models/Targeting.md)                                                           |             |
| [CancelPushRequest](documentation/models/CancelPushRequest.md)                                           |             |
| [InstallationGetRequest](documentation/models/InstallationGetRequest.md)                                 |             |
| [InstallationDeactivateRequest](documentation/models/InstallationDeactivateRequest.md)                   |             |
| [UserBindRequest](documentation/models/UserBindRequest.md)                                               |             |
| [BackendAsServiceSdkCountRequest2](documentation/models/BackendAsServiceSdkCountRequest2.md)             |             |
| [BackendAsServiceSdkCountTenantRequest2](documentation/models/BackendAsServiceSdkCountTenantRequest2.md) |             |
| [RegisterWithCellPhoneRequest](documentation/models/RegisterWithCellPhoneRequest.md)                     |             |
| [PhoneRegisterVerifyRequest](documentation/models/PhoneRegisterVerifyRequest.md)                         |             |
| [RegisterWithEmailRequest](documentation/models/RegisterWithEmailRequest.md)                             |             |
| [EmailRegisterVerifyRequest](documentation/models/EmailRegisterVerifyRequest.md)                         |             |
| [LoginWithCellPhoneRequest](documentation/models/LoginWithCellPhoneRequest.md)                           |             |
| [PhoneLoginVerifyRequest](documentation/models/PhoneLoginVerifyRequest.md)                               |             |
| [LoginWithEmailRequest](documentation/models/LoginWithEmailRequest.md)                                   |             |
| [EmailLoginVerifyRequest](documentation/models/EmailLoginVerifyRequest.md)                               |             |
| [LoginWithDolatManRequest](documentation/models/LoginWithDolatManRequest.md)                             |             |
| [RevokeTokenRequest](documentation/models/RevokeTokenRequest.md)                                         |             |
| [UpdateUserRequest](documentation/models/UpdateUserRequest.md)                                           |             |
| [ResetPasswordRequest](documentation/models/ResetPasswordRequest.md)                                     |             |
| [ResetPasswordVerifyRequest](documentation/models/ResetPasswordVerifyRequest.md)                         |             |
| [ConvertUserByEmailRequest](documentation/models/ConvertUserByEmailRequest.md)                           |             |
| [LogInWithGoogleRequest](documentation/models/LogInWithGoogleRequest.md)                                 |             |

</details>
