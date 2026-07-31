# BackendAsServiceSdkService

A list of all methods in the `BackendAsServiceSdkService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description |
| :------------------------------------------------ | :---------- |
| [login](#login)                                   |             |
| [changePassword](#changepassword)                 |             |
| [logout](#logout)                                 |             |
| [create](#create)                                 |             |
| [list](#list)                                     |             |
| [get\_](#get_)                                    |             |
| [update](#update)                                 |             |
| [deActivate](#deactivate)                         |             |
| [delete\_](#delete_)                              |             |
| [activate](#activate)                             |             |
| [register](#register)                             |             |
| [sendOtp](#sendotp)                               |             |
| [create1](#create1)                               |             |
| [update1](#update1)                               |             |
| [listByTenant](#listbytenant)                     |             |
| [listWithOutTenant](#listwithouttenant)           |             |
| [delete1](#delete1)                               |             |
| [register1](#register1)                           |             |
| [update2](#update2)                               |             |
| [list1](#list1)                                   |             |
| [deActivate1](#deactivate1)                       |             |
| [activate1](#activate1)                           |             |
| [tokensissue](#tokensissue)                       |             |
| [tokensList](#tokenslist)                         |             |
| [tokensRevoke](#tokensrevoke)                     |             |
| [create2](#create2)                               |             |
| [update3](#update3)                               |             |
| [get1](#get1)                                     |             |
| [list2](#list2)                                   |             |
| [getByKey](#getbykey)                             |             |
| [active](#active)                                 |             |
| [deActive](#deactive)                             |             |
| [delete2](#delete2)                               |             |
| [create3](#create3)                               |             |
| [update4](#update4)                               |             |
| [get2](#get2)                                     |             |
| [list3](#list3)                                   |             |
| [delete3](#delete3)                               |             |
| [list4](#list4)                                   |             |
| [list5](#list5)                                   |             |
| [update5](#update5)                               |             |
| [list6](#list6)                                   |             |
| [revoke](#revoke)                                 |             |
| [list7](#list7)                                   |             |
| [detail](#detail)                                 |             |
| [count](#count)                                   |             |
| [countTenant](#counttenant)                       |             |
| [deActivate2](#deactivate2)                       |             |
| [active1](#active1)                               |             |
| [send](#send)                                     |             |
| [stats](#stats)                                   |             |
| [appStats](#appstats)                             |             |
| [byRegion](#byregion)                             |             |
| [byBrand](#bybrand)                               |             |
| [byPlatform](#byplatform)                         |             |
| [byOperator](#byoperator)                         |             |
| [byVersion](#byversion)                           |             |
| [logByTenant](#logbytenant)                       |             |
| [logByApp](#logbyapp)                             |             |
| [create4](#create4)                               |             |
| [update6](#update6)                               |             |
| [list8](#list8)                                   |             |
| [delete4](#delete4)                               |             |
| [create5](#create5)                               |             |
| [get3](#get3)                                     |             |
| [update7](#update7)                               |             |
| [listByApp](#listbyapp)                           |             |
| [listByProject](#listbyproject)                   |             |
| [delete5](#delete5)                               |             |
| [list9](#list9)                                   |             |
| [get4](#get4)                                     |             |
| [delete6](#delete6)                               |             |
| [unlock](#unlock)                                 |             |
| [revokeSessions](#revokesessions)                 |             |
| [tokens](#tokens)                                 |             |
| [statsTotal](#statstotal)                         |             |
| [newLast7Days](#newlast7days)                     |             |
| [activeToday](#activetoday)                       |             |
| [activeTokens](#activetokens)                     |             |
| [create6](#create6)                               |             |
| [update8](#update8)                               |             |
| [list10](#list10)                                 |             |
| [get5](#get5)                                     |             |
| [delete7](#delete7)                               |             |
| [listAccess](#listaccess)                         |             |
| [accessByRole](#accessbyrole)                     |             |
| [updateAccess](#updateaccess)                     |             |
| [register2](#register2)                           |             |
| [update9](#update9)                               |             |
| [deActivate3](#deactivate3)                       |             |
| [sendPush](#sendpush)                             |             |
| [cancelPush](#cancelpush)                         |             |
| [event](#event)                                   |             |
| [installationGet](#installationget)               |             |
| [installationDeactivate](#installationdeactivate) |             |
| [userBind](#userbind)                             |             |
| [count1](#count1)                                 |             |
| [countTenant1](#counttenant1)                     |             |
| [registerWithCellPhone](#registerwithcellphone)   |             |
| [phoneRegisterVerify](#phoneregisterverify)       |             |
| [registerWithEmail](#registerwithemail)           |             |
| [emailRegisterVerify](#emailregisterverify)       |             |
| [loginWithCellPhone](#loginwithcellphone)         |             |
| [phoneLoginVerify](#phoneloginverify)             |             |
| [loginWithEmail](#loginwithemail)                 |             |
| [emailLoginVerify](#emailloginverify)             |             |
| [registerAnonymous](#registeranonymous)           |             |
| [loginWithDolatMan](#loginwithdolatman)           |             |
| [logOut1](#logout1)                               |             |
| [fetchTokens](#fetchtokens)                       |             |
| [revokeToken](#revoketoken)                       |             |
| [fetchUser](#fetchuser)                           |             |
| [updateUser](#updateuser)                         |             |
| [resetPassword](#resetpassword)                   |             |
| [resetPasswordVerify](#resetpasswordverify)       |             |
| [convertUserByEmail](#convertuserbyemail)         |             |
| [logInWithGoogle](#loginwithgoogle)               |             |
| [pull](#pull)                                     |             |

## login

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/auth/login`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [LoginRequest](../models/LoginRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LoginRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const loginRequest: LoginRequest = {
    username: 'admin',
    password: 'Admin@5847!@#',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.login(loginRequest);

  console.log(data);
})();
```

## changePassword

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/auth/change-password`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [ChangePasswordRequest](../models/ChangePasswordRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ChangePasswordRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const changePasswordRequest: ChangePasswordRequest = {
    currentPassword: 'Admin@5847!@#$',
    newPassword: 'Admin@5847!@#',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.changePassword(changePasswordRequest);

  console.log(data);
})();
```

## logout

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/auth/logout`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.logout();

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest1](../models/BackendAsServiceSdkCreateRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCreateRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCreateRequest1: BackendAsServiceSdkCreateRequest1 = {
    name: 'name',
    code: 'code',
    contactEmail: 'contactEmail',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create(
    backendAsServiceSdkCreateRequest1,
  );

  console.log(data);
})();
```

## list

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.list();

  console.log(data);
})();
```

## get\_

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/get`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkGetRequest1](../models/BackendAsServiceSdkGetRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkGetRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkGetRequest1: BackendAsServiceSdkGetRequest1 = {
    tenantId: 'tenantId',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.get_(backendAsServiceSdkGetRequest1);

  console.log(data);
})();
```

## update

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest1](../models/BackendAsServiceSdkUpdateRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest1: BackendAsServiceSdkUpdateRequest1 = {
    tenantId: 'tenantId',
    name: 'name',
    code: 'code',
    contactEmail: 'contactEmail',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update(
    backendAsServiceSdkUpdateRequest1,
  );

  console.log(data);
})();
```

## deActivate

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/deactivate`

**Parameters**

| Name | Type                                                                                        | Required | Description       |
| :--- | :------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkDeActivateRequest1](../models/BackendAsServiceSdkDeActivateRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeActivateRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeActivateRequest1: BackendAsServiceSdkDeActivateRequest1 = {
    tenantId: 'tenantId',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.deActivate(
    backendAsServiceSdkDeActivateRequest1,
  );

  console.log(data);
})();
```

## delete\_

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest1](../models/BackendAsServiceSdkDeleteRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest1: BackendAsServiceSdkDeleteRequest1 = {
    tenantId: 'tenantId',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete_(
    backendAsServiceSdkDeleteRequest1,
  );

  console.log(data);
})();
```

## activate

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/tenants/activate`

**Parameters**

| Name | Type                                                                                    | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkActivateRequest1](../models/BackendAsServiceSdkActivateRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkActivateRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkActivateRequest1: BackendAsServiceSdkActivateRequest1 = {
    tenantId: '543188327CD62569E063B36479BC6E8F',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.activate(
    backendAsServiceSdkActivateRequest1,
  );

  console.log(data);
})();
```

## register

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/auth/tenant/register`

**Parameters**

| Name | Type                                                                                    | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkRegisterRequest1](../models/BackendAsServiceSdkRegisterRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkRegisterRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkRegisterRequest1: BackendAsServiceSdkRegisterRequest1 = {
    firstName: 'حسن',
    lastName: 'احمدی',
    username: 'ahmadiiii',
    password: 'Admin@5847@#$',
    cellphone: 9182021614,
    otpCode: 532978,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.register(
    backendAsServiceSdkRegisterRequest1,
  );

  console.log(data);
})();
```

## sendOtp

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/auth/tenant/send-otp`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [SendOtpRequest](../models/SendOtpRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, SendOtpRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const sendOtpRequest: SendOtpRequest = {
    cellphone: 9182021614,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.sendOtp(sendOtpRequest);

  console.log(data);
})();
```

## create1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/admins/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest2](../models/BackendAsServiceSdkCreateRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCreateRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCreateRequest2: BackendAsServiceSdkCreateRequest2 = {
    username: 'rahimi2',
    password: 'Admin@5847!@#$',
    role: 'APP_ADMIN',
    firstName: 'matin',
    lastName: 'rahimi',
    roleId: '5656091D58DB2F36E063B36479BC40C1',
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create1(
    backendAsServiceSdkCreateRequest2,
  );

  console.log(data);
})();
```

## update1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/admins/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest2](../models/BackendAsServiceSdkUpdateRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest2: BackendAsServiceSdkUpdateRequest2 = {
    userId: '565682DEE1213AE2E063B36479BC69AE',
    role: 'APP_ADMIN',
    cellphone: '9182021310',
    firstName: 'ali',
    lastName: 'rahimi',
    roleId: '56537502CCC16FEAE063B36479BC4057',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update1(
    backendAsServiceSdkUpdateRequest2,
  );

  console.log(data);
})();
```

## listByTenant

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/admins/list-by-tenant`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [ListByTenantRequest](../models/ListByTenantRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ListByTenantRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const listByTenantRequest: ListByTenantRequest = {
    tenantId: '543188327CD42569E063B36479BC6E8F',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.listByTenant(listByTenantRequest);

  console.log(data);
})();
```

## listWithOutTenant

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/admins/list-without-tenant`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.listWithOutTenant();

  console.log(data);
})();
```

## delete1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/admins/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest2](../models/BackendAsServiceSdkDeleteRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest2: BackendAsServiceSdkDeleteRequest2 = {
    userId: '54335BF70DD14D0EE063B36479BCCB5D',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete1(
    backendAsServiceSdkDeleteRequest2,
  );

  console.log(data);
})();
```

## register1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/register`

**Parameters**

| Name | Type                                                                                    | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkRegisterRequest2](../models/BackendAsServiceSdkRegisterRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkRegisterRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkRegisterRequest2: BackendAsServiceSdkRegisterRequest2 = {
    appName: 'test',
    projectId: 'B050D969668C4029B650DAF613F9BE21',
    type: 'web',
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.register1(
    backendAsServiceSdkRegisterRequest2,
  );

  console.log(data);
})();
```

## update2

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest3](../models/BackendAsServiceSdkUpdateRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest3: BackendAsServiceSdkUpdateRequest3 = {
    appId: 'F0E2D2C9EC644E0696F3D315792354BE',
    appName: 'WebApp',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update2(
    backendAsServiceSdkUpdateRequest3,
  );

  console.log(data);
})();
```

## list1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/list`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkListRequest1](../models/BackendAsServiceSdkListRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkListRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkListRequest1: BackendAsServiceSdkListRequest1 = {
    projectId: 'F1A108472001491D85E4B95A9A5960FE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.list1(backendAsServiceSdkListRequest1);

  console.log(data);
})();
```

## deActivate1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/deactivate`

**Parameters**

| Name | Type                                                                                        | Required | Description       |
| :--- | :------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkDeActivateRequest2](../models/BackendAsServiceSdkDeActivateRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeActivateRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeActivateRequest2: BackendAsServiceSdkDeActivateRequest2 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.deActivate1(
    backendAsServiceSdkDeActivateRequest2,
  );

  console.log(data);
})();
```

## activate1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/activate`

**Parameters**

| Name | Type                                                                                    | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkActivateRequest2](../models/BackendAsServiceSdkActivateRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkActivateRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkActivateRequest2: BackendAsServiceSdkActivateRequest2 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.activate1(
    backendAsServiceSdkActivateRequest2,
  );

  console.log(data);
})();
```

## tokensissue

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/tokens/issue`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [TokensissueRequest](../models/TokensissueRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, TokensissueRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const tokensissueRequest: TokensissueRequest = {
    appId: '1F06769946814A9D9497C249490AE6A4',
    createdBy: 'Matin_2',
    expiresInDays: 3,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.tokensissue(tokensissueRequest);

  console.log(data);
})();
```

## tokensList

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/tokens/list`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [TokensListRequest](../models/TokensListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, TokensListRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const tokensListRequest: TokensListRequest = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.tokensList(tokensListRequest);

  console.log(data);
})();
```

## tokensRevoke

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/apps/tokens/revoke`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [TokensRevokeRequest](../models/TokensRevokeRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, TokensRevokeRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const tokensRevokeRequest: TokensRevokeRequest = {
    tokenId: '3D1F7A8EDF494442BF7998F5C4838FFE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.tokensRevoke(tokensRevokeRequest);

  console.log(data);
})();
```

## create2

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest3](../models/BackendAsServiceSdkCreateRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCreateRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCreateRequest3: BackendAsServiceSdkCreateRequest3 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
    name: 'app_test_config',
    key: 'APP_TEST_CONFF',
    value: 'TestTest',
    dataType: 'String',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create2(
    backendAsServiceSdkCreateRequest3,
  );

  console.log(data);
})();
```

## update3

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest4](../models/BackendAsServiceSdkUpdateRequest4.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest4 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest4: BackendAsServiceSdkUpdateRequest4 = {
    configId: '54361F167A630A40E063B36479BC960A',
    name: 'app_test_con',
    value: 'Test',
    dataType: 'String',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update3(
    backendAsServiceSdkUpdateRequest4,
  );

  console.log(data);
})();
```

## get1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/get`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkGetRequest2](../models/BackendAsServiceSdkGetRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkGetRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkGetRequest2: BackendAsServiceSdkGetRequest2 = {
    configId: '54354DBC3A2876FCE063B36479BC1EBC',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.get1(backendAsServiceSdkGetRequest2);

  console.log(data);
})();
```

## list2

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/list`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkListRequest2](../models/BackendAsServiceSdkListRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkListRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkListRequest2: BackendAsServiceSdkListRequest2 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.list2(backendAsServiceSdkListRequest2);

  console.log(data);
})();
```

## getByKey

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/get-by-key`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [GetByKeyRequest](../models/GetByKeyRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, GetByKeyRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const getByKeyRequest: GetByKeyRequest = {
    appId: '1F06769946814A9D9497C249490AE6A4',
    key: 'APP_TEST_CONF',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.getByKey(getByKeyRequest);

  console.log(data);
})();
```

## active

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/activate`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkActiveRequest1](../models/BackendAsServiceSdkActiveRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkActiveRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkActiveRequest1: BackendAsServiceSdkActiveRequest1 = {
    configId: '54354DBC3A2876FCE063B36479BC1EBC',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.active(
    backendAsServiceSdkActiveRequest1,
  );

  console.log(data);
})();
```

## deActive

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/deactivate`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [DeActiveRequest](../models/DeActiveRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, DeActiveRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const deActiveRequest: DeActiveRequest = {
    configId: '54354DBC3A2876FCE063B36479BC1EBC',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.deActive(deActiveRequest);

  console.log(data);
})();
```

## delete2

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/configs/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest3](../models/BackendAsServiceSdkDeleteRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest3: BackendAsServiceSdkDeleteRequest3 = {
    configId: '54354DBC3A2876FCE063B36479BC1EBC',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete2(
    backendAsServiceSdkDeleteRequest3,
  );

  console.log(data);
})();
```

## create3

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/config-rules/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest4](../models/BackendAsServiceSdkCreateRequest4.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  BackendAsServiceSdk,
  BackendAsServiceSdkCreateRequest4,
  CreateRequestConditions,
} from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const createRequestConditions: CreateRequestConditions = {
    test: 1,
  };

  const backendAsServiceSdkCreateRequest4: BackendAsServiceSdkCreateRequest4 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
    configId: '54361F167A630A40E063B36479BC960A',
    priority: 5,
    rolloutPercentage: 20,
    conditions: createRequestConditions,
    value: 'TestTestTest',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create3(
    backendAsServiceSdkCreateRequest4,
  );

  console.log(data);
})();
```

## update4

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/config-rules/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest5](../models/BackendAsServiceSdkUpdateRequest5.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  BackendAsServiceSdk,
  BackendAsServiceSdkUpdateRequest5,
  UpdateRequestConditions,
} from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const updateRequestConditions: UpdateRequestConditions = {
    test: 10,
  };

  const backendAsServiceSdkUpdateRequest5: BackendAsServiceSdkUpdateRequest5 = {
    ruleId: '7351F1BC0A314B39BE14CDE52E82A81E',
    priority: 6,
    isActive: true,
    rolloutPercentage: 30,
    conditions: updateRequestConditions,
    value: 'TestTestTest_Test',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update4(
    backendAsServiceSdkUpdateRequest5,
  );

  console.log(data);
})();
```

## get2

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/config-rules/get`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkGetRequest3](../models/BackendAsServiceSdkGetRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkGetRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkGetRequest3: BackendAsServiceSdkGetRequest3 = {
    ruleId: '7351F1BC0A314B39BE14CDE52E82A81E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.get2(backendAsServiceSdkGetRequest3);

  console.log(data);
})();
```

## list3

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/config-rules/list`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const data = await backendAsServiceSdk.backendAsServiceSdk.list3(input);

  console.log(data);
})();
```

## delete3

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/config-rules/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest4](../models/BackendAsServiceSdkDeleteRequest4.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest4 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest4: BackendAsServiceSdkDeleteRequest4 = {
    ruleId: '7351F1BC0A314B39BE14CDE52E82A81E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete3(
    backendAsServiceSdkDeleteRequest4,
  );

  console.log(data);
})();
```

## list4

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/audit/list`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkListRequest3](../models/BackendAsServiceSdkListRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkListRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkListRequest3: BackendAsServiceSdkListRequest3 = {
    page: 1,
    pageSize: 10,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.list4(backendAsServiceSdkListRequest3);

  console.log(data);
})();
```

## list5

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/system-configs/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.list5();

  console.log(data);
})();
```

## update5

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/system-configs/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest6](../models/BackendAsServiceSdkUpdateRequest6.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest6 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest6: BackendAsServiceSdkUpdateRequest6 = {
    configId: '5436FE710919021FE063B36479BC4E00',
    value: '6',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update5(
    backendAsServiceSdkUpdateRequest6,
  );

  console.log(data);
})();
```

## list6

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/user-tokens/list`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const data = await backendAsServiceSdk.backendAsServiceSdk.list6(input);

  console.log(data);
})();
```

## revoke

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/user-tokens/revoke`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [RevokeRequest](../models/RevokeRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, RevokeRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const revokeRequest: RevokeRequest = {
    tokenId: '7C9446196F6444FCBA77F83E427B1793',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.revoke(revokeRequest);

  console.log(data);
})();
```

## list7

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/crashes/list`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkListRequest4](../models/BackendAsServiceSdkListRequest4.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkListRequest4 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkListRequest4: BackendAsServiceSdkListRequest4 = {
    appId: '6E0CB3F9F06A447C8854CAF7F7413A93',
    fromMs: 1,
    toMs: 10,
    page: 1,
    size: 10,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.list7(backendAsServiceSdkListRequest4);

  console.log(data);
})();
```

## detail

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/crashes/list`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [DetailRequest](../models/DetailRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, DetailRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const detailRequest: DetailRequest = {
    issueId: 'issueId',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.detail(detailRequest);

  console.log(data);
})();
```

## count

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/devices/count`

**Parameters**

| Name | Type                                                                              | Required | Description       |
| :--- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCountRequest1](../models/BackendAsServiceSdkCountRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCountRequest1 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCountRequest1: BackendAsServiceSdkCountRequest1 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.count(
    backendAsServiceSdkCountRequest1,
  );

  console.log(data);
})();
```

## countTenant

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/devices/count/tenant`

**Parameters**

| Name | Type                                                                                          | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCountTenantRequest1](../models/BackendAsServiceSdkCountTenantRequest1.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  BackendAsServiceSdk,
  BackendAsServiceSdkCountTenantRequest1,
} from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCountTenantRequest1: BackendAsServiceSdkCountTenantRequest1 = {
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.countTenant(
    backendAsServiceSdkCountTenantRequest1,
  );

  console.log(data);
})();
```

## deActivate2

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/devices/deactivate`

**Parameters**

| Name | Type                                                                                        | Required | Description       |
| :--- | :------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkDeActivateRequest3](../models/BackendAsServiceSdkDeActivateRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeActivateRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeActivateRequest3: BackendAsServiceSdkDeActivateRequest3 = {
    installationId: '840881e18cbe400765483cf840dfbbd3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.deActivate2(
    backendAsServiceSdkDeActivateRequest3,
  );

  console.log(data);
})();
```

## active1

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/devices/deactivate`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkActiveRequest2](../models/BackendAsServiceSdkActiveRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkActiveRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkActiveRequest2: BackendAsServiceSdkActiveRequest2 = {
    installationId: '840881e18cbe400765483cf840dfbbd3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.active1(
    backendAsServiceSdkActiveRequest2,
  );

  console.log(data);
})();
```

## send

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/send`

**Parameters**

| Name | Type                                    | Required | Description       |
| :--- | :-------------------------------------- | :------- | :---------------- |
| body | [SendRequest](../models/SendRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, SendRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const sendRequest: SendRequest = {
    appId: '445FC79C72B04F1D9EEA9E2125A466CA',
    title: '12متین',
    body: 'رحیمی',
    targetType: 'all',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.send(sendRequest);

  console.log(data);
})();
```

## stats

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/stats`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [StatsRequest](../models/StatsRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, StatsRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const statsRequest: StatsRequest = {
    pushId: 'E85D5017557B4DB99354F27D3B1494D3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.stats(statsRequest);

  console.log(data);
})();
```

## appStats

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/app-stats`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [AppStatsRequest](../models/AppStatsRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AppStatsRequest, BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const appStatsRequest: AppStatsRequest = {
    appId: '1F06769946814A9D9497C249490AE6A4',
    fromTimestamp: 1,
    limit: 10,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.appStats(appStatsRequest);

  console.log(data);
})();
```

## byRegion

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/by-region`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [ByRegionRequest](../models/ByRegionRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ByRegionRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const byRegionRequest: ByRegionRequest = {
    pushId: 'E85D5017557B4DB99354F27D3B1494D3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.byRegion(byRegionRequest);

  console.log(data);
})();
```

## byBrand

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/by-brand`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [ByBrandRequest](../models/ByBrandRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ByBrandRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const byBrandRequest: ByBrandRequest = {
    pushId: 'E85D5017557B4DB99354F27D3B1494D3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.byBrand(byBrandRequest);

  console.log(data);
})();
```

## byPlatform

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/by-platform`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [ByPlatformRequest](../models/ByPlatformRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ByPlatformRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const byPlatformRequest: ByPlatformRequest = {
    pushId: 'E85D5017557B4DB99354F27D3B1494D3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.byPlatform(byPlatformRequest);

  console.log(data);
})();
```

## byOperator

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/by-operator`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [ByOperatorRequest](../models/ByOperatorRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ByOperatorRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const byOperatorRequest: ByOperatorRequest = {
    pushId: 'E85D5017557B4DB99354F27D3B1494D3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.byOperator(byOperatorRequest);

  console.log(data);
})();
```

## byVersion

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/by-version`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [ByVersionRequest](../models/ByVersionRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ByVersionRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const byVersionRequest: ByVersionRequest = {
    pushId: 'E85D5017557B4DB99354F27D3B1494D3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.byVersion(byVersionRequest);

  console.log(data);
})();
```

## logByTenant

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/log/by-tenant`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [LogByTenantRequest](../models/LogByTenantRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LogByTenantRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const logByTenantRequest: LogByTenantRequest = {
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.logByTenant(logByTenantRequest);

  console.log(data);
})();
```

## logByApp

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/push/log/by-app`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [LogByAppRequest](../models/LogByAppRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LogByAppRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const logByAppRequest: LogByAppRequest = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.logByApp(logByAppRequest);

  console.log(data);
})();
```

## create4

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/projects/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest5](../models/BackendAsServiceSdkCreateRequest5.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCreateRequest5 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCreateRequest5: BackendAsServiceSdkCreateRequest5 = {
    name: 'Test_Project_And',
    description: 'description_description_description',
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create4(
    backendAsServiceSdkCreateRequest5,
  );

  console.log(data);
})();
```

## update6

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/projects/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest7](../models/BackendAsServiceSdkUpdateRequest7.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest7 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest7: BackendAsServiceSdkUpdateRequest7 = {
    projectId: 'F1A108472001491D85E4B95A9A5960FE',
    name: 'Test_Test_Project',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update6(
    backendAsServiceSdkUpdateRequest7,
  );

  console.log(data);
})();
```

## list8

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/projects/list`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkListRequest5](../models/BackendAsServiceSdkListRequest5.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkListRequest5 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkListRequest5: BackendAsServiceSdkListRequest5 = {
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.list8(backendAsServiceSdkListRequest5);

  console.log(data);
})();
```

## delete4

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/projects/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest5](../models/BackendAsServiceSdkDeleteRequest5.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest5 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest5: BackendAsServiceSdkDeleteRequest5 = {
    projectId: 'F1A108472001491D85E4B95A9A5960FE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete4(
    backendAsServiceSdkDeleteRequest5,
  );

  console.log(data);
})();
```

## create5

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/in-app/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest6](../models/BackendAsServiceSdkCreateRequest6.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  BackendAsServiceSdk,
  BackendAsServiceSdkCreateRequest6,
  CreateRequestModel,
  CreateRequestModelImageOnly,
  CreateRequestTarget,
} from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const createRequestModelImageOnly: CreateRequestModelImageOnly = {
    image: 'asdasdad',
  };

  const createRequestModel: CreateRequestModel = {
    imageOnly: createRequestModelImageOnly,
  };

  const createRequestTarget: CreateRequestTarget = {
    users: 'all',
  };

  const backendAsServiceSdkCreateRequest6: BackendAsServiceSdkCreateRequest6 = {
    appId: '3809E8D4533D44368FDF1E569F831CFC',
    projectId: 'B050D969668C4029B650DAF613F9BE21',
    tenantId: '5422BB3CD7336067E063B36479BC301E',
    name: 'اندورید اپ',
    type: 'mobile',
    style: 'Horizontal',
    model: createRequestModel,
    target: createRequestTarget,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create5(
    backendAsServiceSdkCreateRequest6,
  );

  console.log(data);
})();
```

## get3

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/in-app/get`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkGetRequest4](../models/BackendAsServiceSdkGetRequest4.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkGetRequest4 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkGetRequest4: BackendAsServiceSdkGetRequest4 = {
    messageId: 'ABAE5AD2FBD44E6099332FE6D57C938F',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.get3(backendAsServiceSdkGetRequest4);

  console.log(data);
})();
```

## update7

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/in-app/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest8](../models/BackendAsServiceSdkUpdateRequest8.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  BackendAsServiceSdk,
  BackendAsServiceSdkUpdateRequest8,
  UpdateRequestModel,
  UpdateRequestModelImageOnly,
  UpdateRequestTarget,
} from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const updateRequestModelImageOnly: UpdateRequestModelImageOnly = {
    image: 'asdasdad',
  };

  const updateRequestModel: UpdateRequestModel = {
    imageOnly: updateRequestModelImageOnly,
  };

  const updateRequestTarget: UpdateRequestTarget = {
    users: 'all',
  };

  const backendAsServiceSdkUpdateRequest8: BackendAsServiceSdkUpdateRequest8 = {
    messageId: 'ABAE5AD2FBD44E6099332FE6D57C938F',
    name: 'اندورید اپ جدید',
    type: 'tablet',
    style: 'Vertical',
    model: updateRequestModel,
    target: updateRequestTarget,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update7(
    backendAsServiceSdkUpdateRequest8,
  );

  console.log(data);
})();
```

## listByApp

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/in-app/list-by-app`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [ListByAppRequest](../models/ListByAppRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ListByAppRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const listByAppRequest: ListByAppRequest = {
    appId: '3809E8D4533D44368FDF1E569F831CFC',
    limit: 1,
    offset: 91,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.listByApp(listByAppRequest);

  console.log(data);
})();
```

## listByProject

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/in-app/list-by-project`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [ListByProjectRequest](../models/ListByProjectRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ListByProjectRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const listByProjectRequest: ListByProjectRequest = {
    projectId: 'B050D969668C4029B650DAF613F9BE21',
    limit: 1,
    offset: 3,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.listByProject(listByProjectRequest);

  console.log(data);
})();
```

## delete5

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/in-app/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest6](../models/BackendAsServiceSdkDeleteRequest6.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest6 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest6: BackendAsServiceSdkDeleteRequest6 = {
    messageId: 'ABAE5AD2FBD44E6099332FE6D57C938F',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete5(
    backendAsServiceSdkDeleteRequest6,
  );

  console.log(data);
})();
```

## list9

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/list`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkListRequest6](../models/BackendAsServiceSdkListRequest6.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkListRequest6 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkListRequest6: BackendAsServiceSdkListRequest6 = {
    appId: 'F0E2D2C9EC644E0696F3D315792354BE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.list9(backendAsServiceSdkListRequest6);

  console.log(data);
})();
```

## get4

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/get`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkGetRequest5](../models/BackendAsServiceSdkGetRequest5.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkGetRequest5 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkGetRequest5: BackendAsServiceSdkGetRequest5 = {
    userId: '6544E0A5B74A40D088997F4ACCB45A45',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.get4(backendAsServiceSdkGetRequest5);

  console.log(data);
})();
```

## delete6

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest7](../models/BackendAsServiceSdkDeleteRequest7.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest7 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest7: BackendAsServiceSdkDeleteRequest7 = {
    userId: '04BF34D61EBE45F29B888FEDB79F664A',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete6(
    backendAsServiceSdkDeleteRequest7,
  );

  console.log(data);
})();
```

## unlock

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/unlock`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [UnlockRequest](../models/UnlockRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, UnlockRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const unlockRequest: UnlockRequest = {
    userId: 'E76F26AAC25C4801BC9343C5E0030D9E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.unlock(unlockRequest);

  console.log(data);
})();
```

## revokeSessions

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/revoke-sessions`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [RevokeSessionsRequest](../models/RevokeSessionsRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, RevokeSessionsRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const revokeSessionsRequest: RevokeSessionsRequest = {
    userId: '83FA50D3135B45D280311592F0C03200',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.revokeSessions(revokeSessionsRequest);

  console.log(data);
})();
```

## tokens

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/tokens`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [TokensRequest](../models/TokensRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, TokensRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const tokensRequest: TokensRequest = {
    userId: '83FA50D3135B45D280311592F0C03200',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.tokens(tokensRequest);

  console.log(data);
})();
```

## statsTotal

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/stats/total`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [StatsTotalRequest](../models/StatsTotalRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, StatsTotalRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const statsTotalRequest: StatsTotalRequest = {
    appId: 'F0E2D2C9EC644E0696F3D315792354BE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.statsTotal(statsTotalRequest);

  console.log(data);
})();
```

## newLast7Days

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/stats/new-last-7-days`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [NewLast7DaysRequest](../models/NewLast7DaysRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, NewLast7DaysRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const newLast7DaysRequest: NewLast7DaysRequest = {
    appId: 'F0E2D2C9EC644E0696F3D315792354BE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.newLast7Days(newLast7DaysRequest);

  console.log(data);
})();
```

## activeToday

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/stats/active-today`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [ActiveTodayRequest](../models/ActiveTodayRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ActiveTodayRequest, BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const activeTodayRequest: ActiveTodayRequest = {
    appId: 'F0E2D2C9EC644E0696F3D315792354BE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.activeToday(activeTodayRequest);

  console.log(data);
})();
```

## activeTokens

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/users/stats/active-tokens`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [ActiveTokensRequest](../models/ActiveTokensRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ActiveTokensRequest, BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const activeTokensRequest: ActiveTokensRequest = {
    appId: 'F0E2D2C9EC644E0696F3D315792354BE',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.activeTokens(activeTokensRequest);

  console.log(data);
})();
```

## create6

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/create`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCreateRequest7](../models/BackendAsServiceSdkCreateRequest7.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCreateRequest7 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCreateRequest7: BackendAsServiceSdkCreateRequest7 = {
    name: 'test_access',
    symbol: 'TEST_ACCESS',
    access: ['5666214A90F63C32E063B36479BCBF16'],
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.create6(
    backendAsServiceSdkCreateRequest7,
  );

  console.log(data);
})();
```

## update8

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/update`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest9](../models/BackendAsServiceSdkUpdateRequest9.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest9 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest9: BackendAsServiceSdkUpdateRequest9 = {
    roleId: '56537502CCC16FEAE063B36479BC4057',
    name: 'test',
    symbol: 'TEST_TEST',
    description: 'description-description-description',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update8(
    backendAsServiceSdkUpdateRequest9,
  );

  console.log(data);
})();
```

## list10

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.list10();

  console.log(data);
})();
```

## get5

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/get`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkGetRequest6](../models/BackendAsServiceSdkGetRequest6.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkGetRequest6 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkGetRequest6: BackendAsServiceSdkGetRequest6 = {
    roleId: '56537502CCC16FEAE063B36479BC4057',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.get5(backendAsServiceSdkGetRequest6);

  console.log(data);
})();
```

## delete7

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/delete`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkDeleteRequest8](../models/BackendAsServiceSdkDeleteRequest8.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeleteRequest8 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeleteRequest8: BackendAsServiceSdkDeleteRequest8 = {
    roleId: '56537502CCC16FEAE063B36479BC4057',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.delete7(
    backendAsServiceSdkDeleteRequest8,
  );

  console.log(data);
})();
```

## listAccess

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/list-access`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const data = await backendAsServiceSdk.backendAsServiceSdk.listAccess(input);

  console.log(data);
})();
```

## accessByRole

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/access/by/role`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [AccessByRoleRequest](../models/AccessByRoleRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AccessByRoleRequest, BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const accessByRoleRequest: AccessByRoleRequest = {
    roleId: '56669A804E7E475FE063B36479BC68EB',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.accessByRole(accessByRoleRequest);

  console.log(data);
})();
```

## updateAccess

- HTTP Method: `POST`
- Endpoint: `/api/v1/console/role/update/access/by/role`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateAccessRequest](../models/UpdateAccessRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, UpdateAccessRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const updateAccessRequest: UpdateAccessRequest = {
    roleId: '56669A804E7E475FE063B36479BC68EB',
    access: ['5666214A90F63C32E063B36479BCBF16'],
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.updateAccess(updateAccessRequest);

  console.log(data);
})();
```

## register2

- HTTP Method: `POST`
- Endpoint: `/api/v1/devices/register`

**Parameters**

| Name | Type                                                                                    | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkRegisterRequest3](../models/BackendAsServiceSdkRegisterRequest3.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkRegisterRequest3 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkRegisterRequest3: BackendAsServiceSdkRegisterRequest3 = {
    platform: 'ANDROID',
    userId: '5424E370C18511DAE063B36479BCFB9E',
    appVersion: '2.5.1',
    deviceBrand: 'Samsung',
    region: 'Tehran',
    simOperatorName: 'Hamrah Avval',
    gender: 'male',
    age: 25,
    deviceLanguage: 'EN',
    osVersion: '1.5.3',
    firstOpenAt: 1235487,
    lastVisitAt: 9854752,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.register2(
    backendAsServiceSdkRegisterRequest3,
  );

  console.log(data);
})();
```

## update9

- HTTP Method: `PATCH`
- Endpoint: `/api/v1/devices/update`

**Parameters**

| Name | Type                                                                                  | Required | Description       |
| :--- | :------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkUpdateRequest10](../models/BackendAsServiceSdkUpdateRequest10.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkUpdateRequest10 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkUpdateRequest10: BackendAsServiceSdkUpdateRequest10 = {
    token:
      'OEJBRDk1RTAyRDNCNDdCMEEwRkEzRDVGQTQ5ODBEQzU6NDQ1RkM3OUM3MkIwNEYxRDlFRUE5RTIxMjVBNDY2Q0E.djTLR1WrCJf8e8kvSve9KvsraA4vU_OxztdOJa77OH4',
    userId: '5424E370C18511DAE063B36479BCFB9E',
    appVersion: '3.5.9',
    region: 'US',
    gender: 'female',
    age: 30,
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.update9(
    backendAsServiceSdkUpdateRequest10,
  );

  console.log(data);
})();
```

## deActivate3

- HTTP Method: `DELETE`
- Endpoint: `/api/v1/devices/deactivate`

**Parameters**

| Name | Type                                                                                        | Required | Description       |
| :--- | :------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [BackendAsServiceSdkDeActivateRequest4](../models/BackendAsServiceSdkDeActivateRequest4.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkDeActivateRequest4 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkDeActivateRequest4: BackendAsServiceSdkDeActivateRequest4 = {
    token:
      'OEJBRDk1RTAyRDNCNDdCMEEwRkEzRDVGQTQ5ODBEQzU6NDQ1RkM3OUM3MkIwNEYxRDlFRUE5RTIxMjVBNDY2Q0E.djTLR1WrCJf8e8kvSve9KvsraA4vU_OxztdOJa77OH4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.deActivate3(
    backendAsServiceSdkDeActivateRequest4,
  );

  console.log(data);
})();
```

## sendPush

- HTTP Method: `POST`
- Endpoint: `/api/v1/push/send`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [SendPushRequest](../models/SendPushRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, Data, SendPushRequest, Targeting } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data1: Data = {
    text: 'hi',
  };

  const targeting: Targeting = {
    gender: 'male',
    ageMin: 18,
    ageMax: 35,
    region: 'IR',
    simOperatorName: 'Hamrah Avval',
    deviceBrand: 'Samsung',
    appVersion: '2.5.1',
  };

  const sendPushRequest: SendPushRequest = {
    apiKey: 'tok_app_W08Df-R-FNUJex09GYyZLX4DAgff3N2B',
    serverKey: 'tok_dev_JtXI1qRU7gNMDg6TFkxa8C1-9tnvsIky',
    title: 'سلام؟؟',
    body: 'خوبیییییییییی ؟؟',
    ttlSeconds: 5,
    priority: 'HIGH',
    data: data1,
    targetType: 'segment',
    targeting: targeting,
    idempotencyKey: 'idempotencyKey',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.sendPush(sendPushRequest);

  console.log(data);
})();
```

## cancelPush

- HTTP Method: `POST`
- Endpoint: `/api/v1/push/cancel`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [CancelPushRequest](../models/CancelPushRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, CancelPushRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const cancelPushRequest: CancelPushRequest = {
    apiKey: 'tok_app_W08Df-R-FNUJex09GYyZLX4DAgff3N2B',
    serverKey: 'tok_dev_JtXI1qRU7gNMDg6TFkxa8C1-9tnvsIky',
    pushId: '8877DA82ADB4467080A9376E7B793276',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.cancelPush(cancelPushRequest);

  console.log(data);
})();
```

## event

- HTTP Method: `POST`
- Endpoint: `/api/v1/push/event`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const data = await backendAsServiceSdk.backendAsServiceSdk.event(input);

  console.log(data);
})();
```

## installationGet

- HTTP Method: `POST`
- Endpoint: `/api/v1/registry/installation/get`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [InstallationGetRequest](../models/InstallationGetRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, InstallationGetRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const installationGetRequest: InstallationGetRequest = {
    installationId: '840881e18cbe400765483cf840dfbbd3',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.installationGet(installationGetRequest);

  console.log(data);
})();
```

## installationDeactivate

- HTTP Method: `POST`
- Endpoint: `/api/v1/registry/installation/deactivate`

**Parameters**

| Name | Type                                                                        | Required | Description       |
| :--- | :-------------------------------------------------------------------------- | :------- | :---------------- |
| body | [InstallationDeactivateRequest](../models/InstallationDeactivateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, InstallationDeactivateRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const installationDeactivateRequest: InstallationDeactivateRequest = {
    installationId: '840881e18cbe400765483cf840dfbbd3',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.installationDeactivate(
    installationDeactivateRequest,
  );

  console.log(data);
})();
```

## userBind

- HTTP Method: `POST`
- Endpoint: `/api/v1/registry/user/bind`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [UserBindRequest](../models/UserBindRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, UserBindRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const userBindRequest: UserBindRequest = {
    installationId: '840881e18cbe400765483cf840dfbbd3',
    userId: '5432E4CA025C4374E063B36479BC722B',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.userBind(userBindRequest);

  console.log(data);
})();
```

## count1

- HTTP Method: `POST`
- Endpoint: `/api/v1/registry/count`

**Parameters**

| Name | Type                                                                              | Required | Description       |
| :--- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCountRequest2](../models/BackendAsServiceSdkCountRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, BackendAsServiceSdkCountRequest2 } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCountRequest2: BackendAsServiceSdkCountRequest2 = {
    appId: '1F06769946814A9D9497C249490AE6A4',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.count1(
    backendAsServiceSdkCountRequest2,
  );

  console.log(data);
})();
```

## countTenant1

- HTTP Method: `POST`
- Endpoint: `/api/v1/registry/count/tenant`

**Parameters**

| Name | Type                                                                                          | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [BackendAsServiceSdkCountTenantRequest2](../models/BackendAsServiceSdkCountTenantRequest2.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  BackendAsServiceSdk,
  BackendAsServiceSdkCountTenantRequest2,
} from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const backendAsServiceSdkCountTenantRequest2: BackendAsServiceSdkCountTenantRequest2 = {
    tenantId: '5422BB3CD7336067E063B36479BC301E',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.countTenant1(
    backendAsServiceSdkCountTenantRequest2,
  );

  console.log(data);
})();
```

## registerWithCellPhone

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/phone/register/send-otp`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [RegisterWithCellPhoneRequest](../models/RegisterWithCellPhoneRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, RegisterWithCellPhoneRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const registerWithCellPhoneRequest: RegisterWithCellPhoneRequest = {
    phone: '09182021310',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.registerWithCellPhone(
    registerWithCellPhoneRequest,
  );

  console.log(data);
})();
```

## phoneRegisterVerify

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/phone/register/verify`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [PhoneRegisterVerifyRequest](../models/PhoneRegisterVerifyRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, PhoneRegisterVerifyRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const phoneRegisterVerifyRequest: PhoneRegisterVerifyRequest = {
    phone: '09182021310',
    code: '509186',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.phoneRegisterVerify(
    phoneRegisterVerifyRequest,
  );

  console.log(data);
})();
```

## registerWithEmail

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/register/send-otp`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [RegisterWithEmailRequest](../models/RegisterWithEmailRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, RegisterWithEmailRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const registerWithEmailRequest: RegisterWithEmailRequest = {
    email: 'matinrahimy@gmail.com',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.registerWithEmail(registerWithEmailRequest);

  console.log(data);
})();
```

## emailRegisterVerify

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/register/verify`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [EmailRegisterVerifyRequest](../models/EmailRegisterVerifyRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, EmailRegisterVerifyRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const emailRegisterVerifyRequest: EmailRegisterVerifyRequest = {
    email: 'matinrahimy@gmail.com',
    code: '313702',
    password: 'Admin@5847!@#',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.emailRegisterVerify(
    emailRegisterVerifyRequest,
  );

  console.log(data);
})();
```

## loginWithCellPhone

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/phone/login/send-otp`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [LoginWithCellPhoneRequest](../models/LoginWithCellPhoneRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LoginWithCellPhoneRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const loginWithCellPhoneRequest: LoginWithCellPhoneRequest = {
    phone: '09182021310',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.loginWithCellPhone(loginWithCellPhoneRequest);

  console.log(data);
})();
```

## phoneLoginVerify

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/phone/login/verify`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [PhoneLoginVerifyRequest](../models/PhoneLoginVerifyRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, PhoneLoginVerifyRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const phoneLoginVerifyRequest: PhoneLoginVerifyRequest = {
    phone: '09182021310',
    code: '287016',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.phoneLoginVerify(phoneLoginVerifyRequest);

  console.log(data);
})();
```

## loginWithEmail

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/login/send-otp`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [LoginWithEmailRequest](../models/LoginWithEmailRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LoginWithEmailRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const loginWithEmailRequest: LoginWithEmailRequest = {
    email: 'matinrahimy@gmail.com',
    password: 'Admin@5847!@',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.loginWithEmail(loginWithEmailRequest);

  console.log(data);
})();
```

## emailLoginVerify

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/login/verify`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [EmailLoginVerifyRequest](../models/EmailLoginVerifyRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, EmailLoginVerifyRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const emailLoginVerifyRequest: EmailLoginVerifyRequest = {
    email: 'matinrahimy@gmail.com',
    code: '479866',
    password: 'Admin@5847!@',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.emailLoginVerify(emailLoginVerifyRequest);

  console.log(data);
})();
```

## registerAnonymous

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/anonymous`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const data = await backendAsServiceSdk.backendAsServiceSdk.registerAnonymous(input);

  console.log(data);
})();
```

## loginWithDolatMan

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/my-gov`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [LoginWithDolatManRequest](../models/LoginWithDolatManRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LoginWithDolatManRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const loginWithDolatManRequest: LoginWithDolatManRequest = {
    code: '251487',
    myGovClientId: 'myGovClientId',
    myGovClientSecret: 'myGovClientSecret',
    myGovRedirectUri: 'myGovRedirectUri',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.loginWithDolatMan(loginWithDolatManRequest);

  console.log(data);
})();
```

## logOut1

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/session/logout`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.logOut1();

  console.log(data);
})();
```

## fetchTokens

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/session/tokens`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.fetchTokens();

  console.log(data);
})();
```

## revokeToken

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/session/tokens/revoke`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [RevokeTokenRequest](../models/RevokeTokenRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, RevokeTokenRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const revokeTokenRequest: RevokeTokenRequest = {
    tokenId: 'AA61A940F2E64D8B9D119C1A7C27A719',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.revokeToken(revokeTokenRequest);

  console.log(data);
})();
```

## fetchUser

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/profile/get`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.fetchUser();

  console.log(data);
})();
```

## updateUser

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/profile/update`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [UpdateUserRequest](../models/UpdateUserRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, UpdateUserRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const updateUserRequest: UpdateUserRequest = {
    firstName: 'متین',
    lastName: 'رحیمی',
    gender: 'male',
    birthDate: '1379-12-07',
    province: 'تهران',
    city: 'تهران',
    address: 'میدان گلچین',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.updateUser(updateUserRequest);

  console.log(data);
})();
```

## resetPassword

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/reset/password/sent-otp`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [ResetPasswordRequest](../models/ResetPasswordRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ResetPasswordRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const resetPasswordRequest: ResetPasswordRequest = {
    email: 'matinrahimy@gmail.com',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.resetPassword(resetPasswordRequest);

  console.log(data);
})();
```

## resetPasswordVerify

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/reset/password/verify`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [ResetPasswordVerifyRequest](../models/ResetPasswordVerifyRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ResetPasswordVerifyRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const resetPasswordVerifyRequest: ResetPasswordVerifyRequest = {
    email: 'matinrahimy@gmail.com',
    password: 'Admin@5847!@',
    code: '253827',
  };

  const data = await backendAsServiceSdk.backendAsServiceSdk.resetPasswordVerify(
    resetPasswordVerifyRequest,
  );

  console.log(data);
})();
```

## convertUserByEmail

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/email/convert/user`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [ConvertUserByEmailRequest](../models/ConvertUserByEmailRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, ConvertUserByEmailRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const convertUserByEmailRequest: ConvertUserByEmailRequest = {
    email: 'matinrahimy1379@gmail.com',
    password: 'Admin@5847!@',
    code: '722512',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.convertUserByEmail(convertUserByEmailRequest);

  console.log(data);
})();
```

## logInWithGoogle

- HTTP Method: `POST`
- Endpoint: `/api/v1/auth/google`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [LogInWithGoogleRequest](../models/LogInWithGoogleRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk, LogInWithGoogleRequest } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const logInWithGoogleRequest: LogInWithGoogleRequest = {
    googleIdToken: 'googleIdToken',
    googleClientId: 'googleClientId',
  };

  const data =
    await backendAsServiceSdk.backendAsServiceSdk.logInWithGoogle(logInWithGoogleRequest);

  console.log(data);
})();
```

## pull

- HTTP Method: `POST`
- Endpoint: `/api/v1/delivery/poll`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.pull();

  console.log(data);
})();
```
