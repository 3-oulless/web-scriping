import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { LoginRequest, loginRequestRequest } from './models/login-request';
import {
  ChangePasswordRequest,
  changePasswordRequestRequest,
} from './models/change-password-request';
import {
  BackendAsServiceSdkCreateRequest1,
  backendAsServiceSdkCreateRequest1Request,
} from './models/backend-as-service-sdk-create-request-1';
import {
  BackendAsServiceSdkGetRequest1,
  backendAsServiceSdkGetRequest1Request,
} from './models/backend-as-service-sdk-get-request-1';
import {
  BackendAsServiceSdkUpdateRequest1,
  backendAsServiceSdkUpdateRequest1Request,
} from './models/backend-as-service-sdk-update-request-1';
import {
  BackendAsServiceSdkDeActivateRequest1,
  backendAsServiceSdkDeActivateRequest1Request,
} from './models/backend-as-service-sdk-de-activate-request-1';
import {
  BackendAsServiceSdkDeleteRequest1,
  backendAsServiceSdkDeleteRequest1Request,
} from './models/backend-as-service-sdk-delete-request-1';
import {
  BackendAsServiceSdkActivateRequest1,
  backendAsServiceSdkActivateRequest1Request,
} from './models/backend-as-service-sdk-activate-request-1';
import {
  BackendAsServiceSdkRegisterRequest1,
  backendAsServiceSdkRegisterRequest1Request,
} from './models/backend-as-service-sdk-register-request-1';
import { SendOtpRequest, sendOtpRequestRequest } from './models/send-otp-request';
import {
  BackendAsServiceSdkCreateRequest2,
  backendAsServiceSdkCreateRequest2Request,
} from './models/backend-as-service-sdk-create-request-2';
import {
  BackendAsServiceSdkUpdateRequest2,
  backendAsServiceSdkUpdateRequest2Request,
} from './models/backend-as-service-sdk-update-request-2';
import { ListByTenantRequest, listByTenantRequestRequest } from './models/list-by-tenant-request';
import {
  BackendAsServiceSdkDeleteRequest2,
  backendAsServiceSdkDeleteRequest2Request,
} from './models/backend-as-service-sdk-delete-request-2';
import {
  BackendAsServiceSdkRegisterRequest2,
  backendAsServiceSdkRegisterRequest2Request,
} from './models/backend-as-service-sdk-register-request-2';
import {
  BackendAsServiceSdkUpdateRequest3,
  backendAsServiceSdkUpdateRequest3Request,
} from './models/backend-as-service-sdk-update-request-3';
import {
  BackendAsServiceSdkListRequest1,
  backendAsServiceSdkListRequest1Request,
} from './models/backend-as-service-sdk-list-request-1';
import {
  BackendAsServiceSdkDeActivateRequest2,
  backendAsServiceSdkDeActivateRequest2Request,
} from './models/backend-as-service-sdk-de-activate-request-2';
import {
  BackendAsServiceSdkActivateRequest2,
  backendAsServiceSdkActivateRequest2Request,
} from './models/backend-as-service-sdk-activate-request-2';
import { TokensissueRequest, tokensissueRequestRequest } from './models/tokensissue-request';
import { TokensListRequest, tokensListRequestRequest } from './models/tokens-list-request';
import { TokensRevokeRequest, tokensRevokeRequestRequest } from './models/tokens-revoke-request';
import {
  BackendAsServiceSdkCreateRequest3,
  backendAsServiceSdkCreateRequest3Request,
} from './models/backend-as-service-sdk-create-request-3';
import {
  BackendAsServiceSdkUpdateRequest4,
  backendAsServiceSdkUpdateRequest4Request,
} from './models/backend-as-service-sdk-update-request-4';
import {
  BackendAsServiceSdkGetRequest2,
  backendAsServiceSdkGetRequest2Request,
} from './models/backend-as-service-sdk-get-request-2';
import {
  BackendAsServiceSdkListRequest2,
  backendAsServiceSdkListRequest2Request,
} from './models/backend-as-service-sdk-list-request-2';
import { GetByKeyRequest, getByKeyRequestRequest } from './models/get-by-key-request';
import {
  BackendAsServiceSdkActiveRequest1,
  backendAsServiceSdkActiveRequest1Request,
} from './models/backend-as-service-sdk-active-request-1';
import { DeActiveRequest, deActiveRequestRequest } from './models/de-active-request';
import {
  BackendAsServiceSdkDeleteRequest3,
  backendAsServiceSdkDeleteRequest3Request,
} from './models/backend-as-service-sdk-delete-request-3';
import {
  BackendAsServiceSdkCreateRequest4,
  backendAsServiceSdkCreateRequest4Request,
} from './models/backend-as-service-sdk-create-request-4';
import {
  BackendAsServiceSdkUpdateRequest5,
  backendAsServiceSdkUpdateRequest5Request,
} from './models/backend-as-service-sdk-update-request-5';
import {
  BackendAsServiceSdkGetRequest3,
  backendAsServiceSdkGetRequest3Request,
} from './models/backend-as-service-sdk-get-request-3';
import {
  BackendAsServiceSdkDeleteRequest4,
  backendAsServiceSdkDeleteRequest4Request,
} from './models/backend-as-service-sdk-delete-request-4';
import {
  BackendAsServiceSdkListRequest3,
  backendAsServiceSdkListRequest3Request,
} from './models/backend-as-service-sdk-list-request-3';
import {
  BackendAsServiceSdkUpdateRequest6,
  backendAsServiceSdkUpdateRequest6Request,
} from './models/backend-as-service-sdk-update-request-6';
import { RevokeRequest, revokeRequestRequest } from './models/revoke-request';
import {
  BackendAsServiceSdkListRequest4,
  backendAsServiceSdkListRequest4Request,
} from './models/backend-as-service-sdk-list-request-4';
import { DetailRequest, detailRequestRequest } from './models/detail-request';
import {
  BackendAsServiceSdkCountRequest1,
  backendAsServiceSdkCountRequest1Request,
} from './models/backend-as-service-sdk-count-request-1';
import {
  BackendAsServiceSdkCountTenantRequest1,
  backendAsServiceSdkCountTenantRequest1Request,
} from './models/backend-as-service-sdk-count-tenant-request-1';
import {
  BackendAsServiceSdkDeActivateRequest3,
  backendAsServiceSdkDeActivateRequest3Request,
} from './models/backend-as-service-sdk-de-activate-request-3';
import {
  BackendAsServiceSdkActiveRequest2,
  backendAsServiceSdkActiveRequest2Request,
} from './models/backend-as-service-sdk-active-request-2';
import { SendRequest, sendRequestRequest } from './models/send-request';
import { StatsRequest, statsRequestRequest } from './models/stats-request';
import { AppStatsRequest, appStatsRequestRequest } from './models/app-stats-request';
import { ByRegionRequest, byRegionRequestRequest } from './models/by-region-request';
import { ByBrandRequest, byBrandRequestRequest } from './models/by-brand-request';
import { ByPlatformRequest, byPlatformRequestRequest } from './models/by-platform-request';
import { ByOperatorRequest, byOperatorRequestRequest } from './models/by-operator-request';
import { ByVersionRequest, byVersionRequestRequest } from './models/by-version-request';
import { LogByTenantRequest, logByTenantRequestRequest } from './models/log-by-tenant-request';
import { LogByAppRequest, logByAppRequestRequest } from './models/log-by-app-request';
import {
  BackendAsServiceSdkCreateRequest5,
  backendAsServiceSdkCreateRequest5Request,
} from './models/backend-as-service-sdk-create-request-5';
import {
  BackendAsServiceSdkUpdateRequest7,
  backendAsServiceSdkUpdateRequest7Request,
} from './models/backend-as-service-sdk-update-request-7';
import {
  BackendAsServiceSdkListRequest5,
  backendAsServiceSdkListRequest5Request,
} from './models/backend-as-service-sdk-list-request-5';
import {
  BackendAsServiceSdkDeleteRequest5,
  backendAsServiceSdkDeleteRequest5Request,
} from './models/backend-as-service-sdk-delete-request-5';
import {
  BackendAsServiceSdkCreateRequest6,
  backendAsServiceSdkCreateRequest6Request,
} from './models/backend-as-service-sdk-create-request-6';
import {
  BackendAsServiceSdkGetRequest4,
  backendAsServiceSdkGetRequest4Request,
} from './models/backend-as-service-sdk-get-request-4';
import {
  BackendAsServiceSdkUpdateRequest8,
  backendAsServiceSdkUpdateRequest8Request,
} from './models/backend-as-service-sdk-update-request-8';
import { ListByAppRequest, listByAppRequestRequest } from './models/list-by-app-request';
import {
  ListByProjectRequest,
  listByProjectRequestRequest,
} from './models/list-by-project-request';
import {
  BackendAsServiceSdkDeleteRequest6,
  backendAsServiceSdkDeleteRequest6Request,
} from './models/backend-as-service-sdk-delete-request-6';
import {
  BackendAsServiceSdkListRequest6,
  backendAsServiceSdkListRequest6Request,
} from './models/backend-as-service-sdk-list-request-6';
import {
  BackendAsServiceSdkGetRequest5,
  backendAsServiceSdkGetRequest5Request,
} from './models/backend-as-service-sdk-get-request-5';
import {
  BackendAsServiceSdkDeleteRequest7,
  backendAsServiceSdkDeleteRequest7Request,
} from './models/backend-as-service-sdk-delete-request-7';
import { UnlockRequest, unlockRequestRequest } from './models/unlock-request';
import {
  RevokeSessionsRequest,
  revokeSessionsRequestRequest,
} from './models/revoke-sessions-request';
import { TokensRequest, tokensRequestRequest } from './models/tokens-request';
import { StatsTotalRequest, statsTotalRequestRequest } from './models/stats-total-request';
import { NewLast7DaysRequest, newLast7DaysRequestRequest } from './models/new-last7-days-request';
import { ActiveTodayRequest, activeTodayRequestRequest } from './models/active-today-request';
import { ActiveTokensRequest, activeTokensRequestRequest } from './models/active-tokens-request';
import {
  BackendAsServiceSdkCreateRequest7,
  backendAsServiceSdkCreateRequest7Request,
} from './models/backend-as-service-sdk-create-request-7';
import {
  BackendAsServiceSdkUpdateRequest9,
  backendAsServiceSdkUpdateRequest9Request,
} from './models/backend-as-service-sdk-update-request-9';
import {
  BackendAsServiceSdkGetRequest6,
  backendAsServiceSdkGetRequest6Request,
} from './models/backend-as-service-sdk-get-request-6';
import {
  BackendAsServiceSdkDeleteRequest8,
  backendAsServiceSdkDeleteRequest8Request,
} from './models/backend-as-service-sdk-delete-request-8';
import { AccessByRoleRequest, accessByRoleRequestRequest } from './models/access-by-role-request';
import { UpdateAccessRequest, updateAccessRequestRequest } from './models/update-access-request';
import {
  BackendAsServiceSdkRegisterRequest3,
  backendAsServiceSdkRegisterRequest3Request,
} from './models/backend-as-service-sdk-register-request-3';
import {
  BackendAsServiceSdkUpdateRequest10,
  backendAsServiceSdkUpdateRequest10Request,
} from './models/backend-as-service-sdk-update-request-10';
import {
  BackendAsServiceSdkDeActivateRequest4,
  backendAsServiceSdkDeActivateRequest4Request,
} from './models/backend-as-service-sdk-de-activate-request-4';
import { SendPushRequest, sendPushRequestRequest } from './models/send-push-request';
import { CancelPushRequest, cancelPushRequestRequest } from './models/cancel-push-request';
import {
  InstallationGetRequest,
  installationGetRequestRequest,
} from './models/installation-get-request';
import {
  InstallationDeactivateRequest,
  installationDeactivateRequestRequest,
} from './models/installation-deactivate-request';
import { UserBindRequest, userBindRequestRequest } from './models/user-bind-request';
import {
  BackendAsServiceSdkCountRequest2,
  backendAsServiceSdkCountRequest2Request,
} from './models/backend-as-service-sdk-count-request-2';
import {
  BackendAsServiceSdkCountTenantRequest2,
  backendAsServiceSdkCountTenantRequest2Request,
} from './models/backend-as-service-sdk-count-tenant-request-2';
import {
  RegisterWithCellPhoneRequest,
  registerWithCellPhoneRequestRequest,
} from './models/register-with-cell-phone-request';
import {
  PhoneRegisterVerifyRequest,
  phoneRegisterVerifyRequestRequest,
} from './models/phone-register-verify-request';
import {
  RegisterWithEmailRequest,
  registerWithEmailRequestRequest,
} from './models/register-with-email-request';
import {
  EmailRegisterVerifyRequest,
  emailRegisterVerifyRequestRequest,
} from './models/email-register-verify-request';
import {
  LoginWithCellPhoneRequest,
  loginWithCellPhoneRequestRequest,
} from './models/login-with-cell-phone-request';
import {
  PhoneLoginVerifyRequest,
  phoneLoginVerifyRequestRequest,
} from './models/phone-login-verify-request';
import {
  LoginWithEmailRequest,
  loginWithEmailRequestRequest,
} from './models/login-with-email-request';
import {
  EmailLoginVerifyRequest,
  emailLoginVerifyRequestRequest,
} from './models/email-login-verify-request';
import {
  LoginWithDolatManRequest,
  loginWithDolatManRequestRequest,
} from './models/login-with-dolat-man-request';
import { RevokeTokenRequest, revokeTokenRequestRequest } from './models/revoke-token-request';
import { UpdateUserRequest, updateUserRequestRequest } from './models/update-user-request';
import { ResetPasswordRequest, resetPasswordRequestRequest } from './models/reset-password-request';
import {
  ResetPasswordVerifyRequest,
  resetPasswordVerifyRequestRequest,
} from './models/reset-password-verify-request';
import {
  ConvertUserByEmailRequest,
  convertUserByEmailRequestRequest,
} from './models/convert-user-by-email-request';
import {
  LogInWithGoogleRequest,
  logInWithGoogleRequestRequest,
} from './models/log-in-with-google-request';

/**
 * Service class for BackendAsServiceSdkService operations.
 * Provides methods to interact with BackendAsServiceSdkService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class BackendAsServiceSdkService extends BaseService {
  protected loginConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected changePasswordConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected logoutConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected createConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected listConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected get_Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected updateConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected deActivateConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete_Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected activateConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected registerConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected sendOtpConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected create1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected listByTenantConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected listWithOutTenantConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected register1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update2Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected deActivate1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected activate1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected tokensissueConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected tokensListConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected tokensRevokeConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected create2Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update3Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected get1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list2Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected getByKeyConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected activeConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected deActiveConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete2Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected create3Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update4Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected get2Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list3Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete3Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list4Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list5Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update5Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list6Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected revokeConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list7Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected detailConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected countConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected countTenantConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected deActivate2Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected active1Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected sendConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected statsConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected appStatsConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected byRegionConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected byBrandConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected byPlatformConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected byOperatorConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected byVersionConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected logByTenantConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected logByAppConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected create4Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update6Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list8Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete4Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected create5Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected get3Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update7Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected listByAppConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected listByProjectConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete5Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list9Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected get4Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete6Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected unlockConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected revokeSessionsConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected tokensConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected statsTotalConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected newLast7DaysConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected activeTodayConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected activeTokensConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected create6Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected update8Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected list10Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected get5Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected delete7Config: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected listAccessConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected accessByRoleConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected updateAccessConfig: Partial<SdkConfig> = { environment: Environment.BASEURL };

  protected register2Config: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHGETWAY };

  protected update9Config: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHGETWAY };

  protected deActivate3Config: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHGETWAY };

  protected sendPushConfig: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHGETWAY };

  protected cancelPushConfig: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHGETWAY };

  protected eventConfig: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHGETWAY };

  protected installationGetConfig: Partial<SdkConfig> = {
    environment: Environment.BASEURLDEVICEREGISTRY,
  };

  protected installationDeactivateConfig: Partial<SdkConfig> = {
    environment: Environment.BASEURLDEVICEREGISTRY,
  };

  protected userBindConfig: Partial<SdkConfig> = { environment: Environment.BASEURLDEVICEREGISTRY };

  protected count1Config: Partial<SdkConfig> = { environment: Environment.BASEURLDEVICEREGISTRY };

  protected countTenant1Config: Partial<SdkConfig> = {
    environment: Environment.BASEURLDEVICEREGISTRY,
  };

  protected registerWithCellPhoneConfig: Partial<SdkConfig> = {
    environment: Environment.BASEURLAUTH,
  };

  protected phoneRegisterVerifyConfig: Partial<SdkConfig> = {
    environment: Environment.BASEURLAUTH,
  };

  protected registerWithEmailConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected emailRegisterVerifyConfig: Partial<SdkConfig> = {
    environment: Environment.BASEURLAUTH,
  };

  protected loginWithCellPhoneConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected phoneLoginVerifyConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected loginWithEmailConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected emailLoginVerifyConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected registerAnonymousConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected loginWithDolatManConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected logOut1Config: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected fetchTokensConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected revokeTokenConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected fetchUserConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected updateUserConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected resetPasswordConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected resetPasswordVerifyConfig: Partial<SdkConfig> = {
    environment: Environment.BASEURLAUTH,
  };

  protected convertUserByEmailConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected logInWithGoogleConfig: Partial<SdkConfig> = { environment: Environment.BASEURLAUTH };

  protected pullConfig: Partial<SdkConfig> = { environment: Environment.BASEURLPUSHDELIVERY };

  /**
   * Sets method-level configuration for login.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLoginConfig(config: Partial<SdkConfig>): this {
    this.loginConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for changePassword.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setChangePasswordConfig(config: Partial<SdkConfig>): this {
    this.changePasswordConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for logout.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogoutConfig(config: Partial<SdkConfig>): this {
    this.logoutConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for create.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateConfig(config: Partial<SdkConfig>): this {
    this.createConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListConfig(config: Partial<SdkConfig>): this {
    this.listConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for get_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGet_Config(config: Partial<SdkConfig>): this {
    this.get_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateConfig(config: Partial<SdkConfig>): this {
    this.updateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deActivate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeActivateConfig(config: Partial<SdkConfig>): this {
    this.deActivateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete_Config(config: Partial<SdkConfig>): this {
    this.delete_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for activate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setActivateConfig(config: Partial<SdkConfig>): this {
    this.activateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for register.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRegisterConfig(config: Partial<SdkConfig>): this {
    this.registerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for sendOtp.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendOtpConfig(config: Partial<SdkConfig>): this {
    this.sendOtpConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for create1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate1Config(config: Partial<SdkConfig>): this {
    this.create1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate1Config(config: Partial<SdkConfig>): this {
    this.update1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for listByTenant.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListByTenantConfig(config: Partial<SdkConfig>): this {
    this.listByTenantConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listWithOutTenant.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListWithOutTenantConfig(config: Partial<SdkConfig>): this {
    this.listWithOutTenantConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete1Config(config: Partial<SdkConfig>): this {
    this.delete1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for register1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRegister1Config(config: Partial<SdkConfig>): this {
    this.register1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate2Config(config: Partial<SdkConfig>): this {
    this.update2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList1Config(config: Partial<SdkConfig>): this {
    this.list1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for deActivate1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeActivate1Config(config: Partial<SdkConfig>): this {
    this.deActivate1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for activate1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setActivate1Config(config: Partial<SdkConfig>): this {
    this.activate1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for tokensissue.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTokensissueConfig(config: Partial<SdkConfig>): this {
    this.tokensissueConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for tokensList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTokensListConfig(config: Partial<SdkConfig>): this {
    this.tokensListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for tokensRevoke.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTokensRevokeConfig(config: Partial<SdkConfig>): this {
    this.tokensRevokeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for create2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate2Config(config: Partial<SdkConfig>): this {
    this.create2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate3Config(config: Partial<SdkConfig>): this {
    this.update3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for get1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGet1Config(config: Partial<SdkConfig>): this {
    this.get1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList2Config(config: Partial<SdkConfig>): this {
    this.list2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for getByKey.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetByKeyConfig(config: Partial<SdkConfig>): this {
    this.getByKeyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for active.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setActiveConfig(config: Partial<SdkConfig>): this {
    this.activeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deActive.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeActiveConfig(config: Partial<SdkConfig>): this {
    this.deActiveConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete2Config(config: Partial<SdkConfig>): this {
    this.delete2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate3Config(config: Partial<SdkConfig>): this {
    this.create3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate4Config(config: Partial<SdkConfig>): this {
    this.update4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for get2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGet2Config(config: Partial<SdkConfig>): this {
    this.get2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList3Config(config: Partial<SdkConfig>): this {
    this.list3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete3Config(config: Partial<SdkConfig>): this {
    this.delete3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList4Config(config: Partial<SdkConfig>): this {
    this.list4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList5Config(config: Partial<SdkConfig>): this {
    this.list5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate5Config(config: Partial<SdkConfig>): this {
    this.update5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList6Config(config: Partial<SdkConfig>): this {
    this.list6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for revoke.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRevokeConfig(config: Partial<SdkConfig>): this {
    this.revokeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list7.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList7Config(config: Partial<SdkConfig>): this {
    this.list7Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for detail.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDetailConfig(config: Partial<SdkConfig>): this {
    this.detailConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for count.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCountConfig(config: Partial<SdkConfig>): this {
    this.countConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for countTenant.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCountTenantConfig(config: Partial<SdkConfig>): this {
    this.countTenantConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deActivate2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeActivate2Config(config: Partial<SdkConfig>): this {
    this.deActivate2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for active1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setActive1Config(config: Partial<SdkConfig>): this {
    this.active1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for send.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendConfig(config: Partial<SdkConfig>): this {
    this.sendConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for stats.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setStatsConfig(config: Partial<SdkConfig>): this {
    this.statsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for appStats.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAppStatsConfig(config: Partial<SdkConfig>): this {
    this.appStatsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for byRegion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setByRegionConfig(config: Partial<SdkConfig>): this {
    this.byRegionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for byBrand.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setByBrandConfig(config: Partial<SdkConfig>): this {
    this.byBrandConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for byPlatform.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setByPlatformConfig(config: Partial<SdkConfig>): this {
    this.byPlatformConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for byOperator.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setByOperatorConfig(config: Partial<SdkConfig>): this {
    this.byOperatorConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for byVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setByVersionConfig(config: Partial<SdkConfig>): this {
    this.byVersionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for logByTenant.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogByTenantConfig(config: Partial<SdkConfig>): this {
    this.logByTenantConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for logByApp.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogByAppConfig(config: Partial<SdkConfig>): this {
    this.logByAppConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for create4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate4Config(config: Partial<SdkConfig>): this {
    this.create4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate6Config(config: Partial<SdkConfig>): this {
    this.update6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list8.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList8Config(config: Partial<SdkConfig>): this {
    this.list8Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete4Config(config: Partial<SdkConfig>): this {
    this.delete4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate5Config(config: Partial<SdkConfig>): this {
    this.create5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for get3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGet3Config(config: Partial<SdkConfig>): this {
    this.get3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update7.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate7Config(config: Partial<SdkConfig>): this {
    this.update7Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for listByApp.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListByAppConfig(config: Partial<SdkConfig>): this {
    this.listByAppConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listByProject.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListByProjectConfig(config: Partial<SdkConfig>): this {
    this.listByProjectConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete5Config(config: Partial<SdkConfig>): this {
    this.delete5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list9.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList9Config(config: Partial<SdkConfig>): this {
    this.list9Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for get4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGet4Config(config: Partial<SdkConfig>): this {
    this.get4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete6Config(config: Partial<SdkConfig>): this {
    this.delete6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for unlock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUnlockConfig(config: Partial<SdkConfig>): this {
    this.unlockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for revokeSessions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRevokeSessionsConfig(config: Partial<SdkConfig>): this {
    this.revokeSessionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for tokens.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTokensConfig(config: Partial<SdkConfig>): this {
    this.tokensConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for statsTotal.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setStatsTotalConfig(config: Partial<SdkConfig>): this {
    this.statsTotalConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for newLast7Days.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setNewLast7DaysConfig(config: Partial<SdkConfig>): this {
    this.newLast7DaysConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for activeToday.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setActiveTodayConfig(config: Partial<SdkConfig>): this {
    this.activeTodayConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for activeTokens.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setActiveTokensConfig(config: Partial<SdkConfig>): this {
    this.activeTokensConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for create6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate6Config(config: Partial<SdkConfig>): this {
    this.create6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update8.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate8Config(config: Partial<SdkConfig>): this {
    this.update8Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list10.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList10Config(config: Partial<SdkConfig>): this {
    this.list10Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for get5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGet5Config(config: Partial<SdkConfig>): this {
    this.get5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete7.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete7Config(config: Partial<SdkConfig>): this {
    this.delete7Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for listAccess.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListAccessConfig(config: Partial<SdkConfig>): this {
    this.listAccessConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for accessByRole.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAccessByRoleConfig(config: Partial<SdkConfig>): this {
    this.accessByRoleConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateAccess.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateAccessConfig(config: Partial<SdkConfig>): this {
    this.updateAccessConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for register2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRegister2Config(config: Partial<SdkConfig>): this {
    this.register2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update9.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate9Config(config: Partial<SdkConfig>): this {
    this.update9Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for deActivate3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeActivate3Config(config: Partial<SdkConfig>): this {
    this.deActivate3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for sendPush.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendPushConfig(config: Partial<SdkConfig>): this {
    this.sendPushConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for cancelPush.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCancelPushConfig(config: Partial<SdkConfig>): this {
    this.cancelPushConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for event.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEventConfig(config: Partial<SdkConfig>): this {
    this.eventConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for installationGet.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInstallationGetConfig(config: Partial<SdkConfig>): this {
    this.installationGetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for installationDeactivate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInstallationDeactivateConfig(config: Partial<SdkConfig>): this {
    this.installationDeactivateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for userBind.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUserBindConfig(config: Partial<SdkConfig>): this {
    this.userBindConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for count1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCount1Config(config: Partial<SdkConfig>): this {
    this.count1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for countTenant1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCountTenant1Config(config: Partial<SdkConfig>): this {
    this.countTenant1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for registerWithCellPhone.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRegisterWithCellPhoneConfig(config: Partial<SdkConfig>): this {
    this.registerWithCellPhoneConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for phoneRegisterVerify.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPhoneRegisterVerifyConfig(config: Partial<SdkConfig>): this {
    this.phoneRegisterVerifyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for registerWithEmail.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRegisterWithEmailConfig(config: Partial<SdkConfig>): this {
    this.registerWithEmailConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for emailRegisterVerify.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEmailRegisterVerifyConfig(config: Partial<SdkConfig>): this {
    this.emailRegisterVerifyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for loginWithCellPhone.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLoginWithCellPhoneConfig(config: Partial<SdkConfig>): this {
    this.loginWithCellPhoneConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for phoneLoginVerify.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPhoneLoginVerifyConfig(config: Partial<SdkConfig>): this {
    this.phoneLoginVerifyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for loginWithEmail.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLoginWithEmailConfig(config: Partial<SdkConfig>): this {
    this.loginWithEmailConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for emailLoginVerify.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEmailLoginVerifyConfig(config: Partial<SdkConfig>): this {
    this.emailLoginVerifyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for registerAnonymous.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRegisterAnonymousConfig(config: Partial<SdkConfig>): this {
    this.registerAnonymousConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for loginWithDolatMan.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLoginWithDolatManConfig(config: Partial<SdkConfig>): this {
    this.loginWithDolatManConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for logOut1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogOut1Config(config: Partial<SdkConfig>): this {
    this.logOut1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for fetchTokens.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFetchTokensConfig(config: Partial<SdkConfig>): this {
    this.fetchTokensConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for revokeToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRevokeTokenConfig(config: Partial<SdkConfig>): this {
    this.revokeTokenConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for fetchUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFetchUserConfig(config: Partial<SdkConfig>): this {
    this.fetchUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateUserConfig(config: Partial<SdkConfig>): this {
    this.updateUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for resetPassword.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setResetPasswordConfig(config: Partial<SdkConfig>): this {
    this.resetPasswordConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for resetPasswordVerify.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setResetPasswordVerifyConfig(config: Partial<SdkConfig>): this {
    this.resetPasswordVerifyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for convertUserByEmail.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setConvertUserByEmailConfig(config: Partial<SdkConfig>): this {
    this.convertUserByEmailConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for logInWithGoogle.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogInWithGoogleConfig(config: Partial<SdkConfig>): this {
    this.logInWithGoogleConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for pull.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPullConfig(config: Partial<SdkConfig>): this {
    this.pullConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async login(body: LoginRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.loginConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/auth/login')
      .setRequestSchema(loginRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async changePassword(
    body: ChangePasswordRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.changePasswordConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/auth/change-password')
      .setRequestSchema(changePasswordRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logout(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.logoutConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/auth/logout')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create(
    body: BackendAsServiceSdkCreateRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async get_(
    body: BackendAsServiceSdkGetRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.get_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/get')
      .setRequestSchema(backendAsServiceSdkGetRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update(
    body: BackendAsServiceSdkUpdateRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deActivate(
    body: BackendAsServiceSdkDeActivateRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deActivateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/deactivate')
      .setRequestSchema(backendAsServiceSdkDeActivateRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete_(
    body: BackendAsServiceSdkDeleteRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async activate(
    body: BackendAsServiceSdkActivateRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.activateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/tenants/activate')
      .setRequestSchema(backendAsServiceSdkActivateRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async register(
    body: BackendAsServiceSdkRegisterRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.registerConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/auth/tenant/register')
      .setRequestSchema(backendAsServiceSdkRegisterRequest1Request)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async sendOtp(body: SendOtpRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendOtpConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/auth/tenant/send-otp')
      .setRequestSchema(sendOtpRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create1(
    body: BackendAsServiceSdkCreateRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/admins/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update1(
    body: BackendAsServiceSdkUpdateRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/admins/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listByTenant(body: ListByTenantRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listByTenantConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/admins/list-by-tenant')
      .setRequestSchema(listByTenantRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listWithOutTenant(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listWithOutTenantConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/admins/list-without-tenant')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete1(
    body: BackendAsServiceSdkDeleteRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/admins/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async register1(
    body: BackendAsServiceSdkRegisterRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.register1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/register')
      .setRequestSchema(backendAsServiceSdkRegisterRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update2(
    body: BackendAsServiceSdkUpdateRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list1(
    body: BackendAsServiceSdkListRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/list')
      .setRequestSchema(backendAsServiceSdkListRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deActivate1(
    body: BackendAsServiceSdkDeActivateRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deActivate1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/deactivate')
      .setRequestSchema(backendAsServiceSdkDeActivateRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async activate1(
    body: BackendAsServiceSdkActivateRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.activate1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/activate')
      .setRequestSchema(backendAsServiceSdkActivateRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async tokensissue(body: TokensissueRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.tokensissueConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/tokens/issue')
      .setRequestSchema(tokensissueRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async tokensList(body: TokensListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.tokensListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/tokens/list')
      .setRequestSchema(tokensListRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async tokensRevoke(body: TokensRevokeRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.tokensRevokeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/apps/tokens/revoke')
      .setRequestSchema(tokensRevokeRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create2(
    body: BackendAsServiceSdkCreateRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update3(
    body: BackendAsServiceSdkUpdateRequest4,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest4Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async get1(
    body: BackendAsServiceSdkGetRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.get1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/get')
      .setRequestSchema(backendAsServiceSdkGetRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list2(
    body: BackendAsServiceSdkListRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/list')
      .setRequestSchema(backendAsServiceSdkListRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getByKey(body: GetByKeyRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getByKeyConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/get-by-key')
      .setRequestSchema(getByKeyRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async active(
    body: BackendAsServiceSdkActiveRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.activeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/activate')
      .setRequestSchema(backendAsServiceSdkActiveRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deActive(body: DeActiveRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deActiveConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/deactivate')
      .setRequestSchema(deActiveRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete2(
    body: BackendAsServiceSdkDeleteRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/configs/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create3(
    body: BackendAsServiceSdkCreateRequest4,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/config-rules/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest4Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update4(
    body: BackendAsServiceSdkUpdateRequest5,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/config-rules/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest5Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async get2(
    body: BackendAsServiceSdkGetRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.get2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/config-rules/get')
      .setRequestSchema(backendAsServiceSdkGetRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list3(body: any, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/config-rules/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete3(
    body: BackendAsServiceSdkDeleteRequest4,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/config-rules/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest4Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list4(
    body: BackendAsServiceSdkListRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/audit/list')
      .setRequestSchema(backendAsServiceSdkListRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list5(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/system-configs/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update5(
    body: BackendAsServiceSdkUpdateRequest6,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/system-configs/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest6Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list6(body: any, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/user-tokens/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async revoke(body: RevokeRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.revokeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/user-tokens/revoke')
      .setRequestSchema(revokeRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list7(
    body: BackendAsServiceSdkListRequest4,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list7Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/crashes/list')
      .setRequestSchema(backendAsServiceSdkListRequest4Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async detail(body: DetailRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.detailConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/crashes/list')
      .setRequestSchema(detailRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async count(
    body: BackendAsServiceSdkCountRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.countConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/devices/count')
      .setRequestSchema(backendAsServiceSdkCountRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async countTenant(
    body: BackendAsServiceSdkCountTenantRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.countTenantConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/devices/count/tenant')
      .setRequestSchema(backendAsServiceSdkCountTenantRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deActivate2(
    body: BackendAsServiceSdkDeActivateRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deActivate2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/devices/deactivate')
      .setRequestSchema(backendAsServiceSdkDeActivateRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async active1(
    body: BackendAsServiceSdkActiveRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.active1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/devices/deactivate')
      .setRequestSchema(backendAsServiceSdkActiveRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async send(body: SendRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/send')
      .setRequestSchema(sendRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async stats(body: StatsRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.statsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/stats')
      .setRequestSchema(statsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async appStats(body: AppStatsRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.appStatsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/app-stats')
      .setRequestSchema(appStatsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async byRegion(body: ByRegionRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.byRegionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/by-region')
      .setRequestSchema(byRegionRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async byBrand(body: ByBrandRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.byBrandConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/by-brand')
      .setRequestSchema(byBrandRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async byPlatform(body: ByPlatformRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.byPlatformConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/by-platform')
      .setRequestSchema(byPlatformRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async byOperator(body: ByOperatorRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.byOperatorConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/by-operator')
      .setRequestSchema(byOperatorRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async byVersion(body: ByVersionRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.byVersionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/by-version')
      .setRequestSchema(byVersionRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logByTenant(body: LogByTenantRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.logByTenantConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/log/by-tenant')
      .setRequestSchema(logByTenantRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logByApp(body: LogByAppRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.logByAppConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/push/log/by-app')
      .setRequestSchema(logByAppRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create4(
    body: BackendAsServiceSdkCreateRequest5,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/projects/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest5Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update6(
    body: BackendAsServiceSdkUpdateRequest7,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/projects/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest7Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list8(
    body: BackendAsServiceSdkListRequest5,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list8Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/projects/list')
      .setRequestSchema(backendAsServiceSdkListRequest5Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete4(
    body: BackendAsServiceSdkDeleteRequest5,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/projects/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest5Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create5(
    body: BackendAsServiceSdkCreateRequest6,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/in-app/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest6Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async get3(
    body: BackendAsServiceSdkGetRequest4,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.get3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/in-app/get')
      .setRequestSchema(backendAsServiceSdkGetRequest4Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update7(
    body: BackendAsServiceSdkUpdateRequest8,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update7Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/in-app/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest8Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listByApp(body: ListByAppRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listByAppConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/in-app/list-by-app')
      .setRequestSchema(listByAppRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listByProject(
    body: ListByProjectRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listByProjectConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/in-app/list-by-project')
      .setRequestSchema(listByProjectRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete5(
    body: BackendAsServiceSdkDeleteRequest6,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/in-app/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest6Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list9(
    body: BackendAsServiceSdkListRequest6,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list9Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/list')
      .setRequestSchema(backendAsServiceSdkListRequest6Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async get4(
    body: BackendAsServiceSdkGetRequest5,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.get4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/get')
      .setRequestSchema(backendAsServiceSdkGetRequest5Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete6(
    body: BackendAsServiceSdkDeleteRequest7,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest7Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async unlock(body: UnlockRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.unlockConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/unlock')
      .setRequestSchema(unlockRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async revokeSessions(
    body: RevokeSessionsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.revokeSessionsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/revoke-sessions')
      .setRequestSchema(revokeSessionsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async tokens(body: TokensRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.tokensConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/tokens')
      .setRequestSchema(tokensRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async statsTotal(body: StatsTotalRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.statsTotalConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/stats/total')
      .setRequestSchema(statsTotalRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async newLast7Days(body: NewLast7DaysRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.newLast7DaysConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/stats/new-last-7-days')
      .setRequestSchema(newLast7DaysRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async activeToday(body: ActiveTodayRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.activeTodayConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/stats/active-today')
      .setRequestSchema(activeTodayRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async activeTokens(body: ActiveTokensRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.activeTokensConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/users/stats/active-tokens')
      .setRequestSchema(activeTokensRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async create6(
    body: BackendAsServiceSdkCreateRequest7,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/create')
      .setRequestSchema(backendAsServiceSdkCreateRequest7Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update8(
    body: BackendAsServiceSdkUpdateRequest9,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update8Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest9Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list10(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list10Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async get5(
    body: BackendAsServiceSdkGetRequest6,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.get5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/get')
      .setRequestSchema(backendAsServiceSdkGetRequest6Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async delete7(
    body: BackendAsServiceSdkDeleteRequest8,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete7Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/delete')
      .setRequestSchema(backendAsServiceSdkDeleteRequest8Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listAccess(body: any, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listAccessConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/list-access')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async accessByRole(body: AccessByRoleRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.accessByRoleConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/access/by/role')
      .setRequestSchema(accessByRoleRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateAccess(body: UpdateAccessRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateAccessConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/console/role/update/access/by/role')
      .setRequestSchema(updateAccessRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async register2(
    body: BackendAsServiceSdkRegisterRequest3,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.register2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/devices/register')
      .setRequestSchema(backendAsServiceSdkRegisterRequest3Request)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async update9(
    body: BackendAsServiceSdkUpdateRequest10,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update9Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/api/v1/devices/update')
      .setRequestSchema(backendAsServiceSdkUpdateRequest10Request)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deActivate3(
    body: BackendAsServiceSdkDeActivateRequest4,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deActivate3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/api/v1/devices/deactivate')
      .setRequestSchema(backendAsServiceSdkDeActivateRequest4Request)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async sendPush(body: SendPushRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendPushConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/push/send')
      .setRequestSchema(sendPushRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async cancelPush(body: CancelPushRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.cancelPushConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/push/cancel')
      .setRequestSchema(cancelPushRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async event(body: any, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.eventConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/push/event')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async installationGet(
    body: InstallationGetRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.installationGetConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/registry/installation/get')
      .setRequestSchema(installationGetRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async installationDeactivate(
    body: InstallationDeactivateRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.installationDeactivateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/registry/installation/deactivate')
      .setRequestSchema(installationDeactivateRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async userBind(body: UserBindRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.userBindConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/registry/user/bind')
      .setRequestSchema(userBindRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async count1(
    body: BackendAsServiceSdkCountRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.count1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/registry/count')
      .setRequestSchema(backendAsServiceSdkCountRequest2Request)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async countTenant1(
    body: BackendAsServiceSdkCountTenantRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.countTenant1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/registry/count/tenant')
      .setRequestSchema(backendAsServiceSdkCountTenantRequest2Request)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async registerWithCellPhone(
    body: RegisterWithCellPhoneRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.registerWithCellPhoneConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/phone/register/send-otp')
      .setRequestSchema(registerWithCellPhoneRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async phoneRegisterVerify(
    body: PhoneRegisterVerifyRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.phoneRegisterVerifyConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/phone/register/verify')
      .setRequestSchema(phoneRegisterVerifyRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async registerWithEmail(
    body: RegisterWithEmailRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.registerWithEmailConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/register/send-otp')
      .setRequestSchema(registerWithEmailRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async emailRegisterVerify(
    body: EmailRegisterVerifyRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.emailRegisterVerifyConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/register/verify')
      .setRequestSchema(emailRegisterVerifyRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async loginWithCellPhone(
    body: LoginWithCellPhoneRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.loginWithCellPhoneConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/phone/login/send-otp')
      .setRequestSchema(loginWithCellPhoneRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async phoneLoginVerify(
    body: PhoneLoginVerifyRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.phoneLoginVerifyConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/phone/login/verify')
      .setRequestSchema(phoneLoginVerifyRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async loginWithEmail(
    body: LoginWithEmailRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.loginWithEmailConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/login/send-otp')
      .setRequestSchema(loginWithEmailRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async emailLoginVerify(
    body: EmailLoginVerifyRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.emailLoginVerifyConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/login/verify')
      .setRequestSchema(emailLoginVerifyRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async registerAnonymous(body: any, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.registerAnonymousConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/anonymous')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async loginWithDolatMan(
    body: LoginWithDolatManRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.loginWithDolatManConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/my-gov')
      .setRequestSchema(loginWithDolatManRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logOut1(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.logOut1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/session/logout')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async fetchTokens(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.fetchTokensConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/session/tokens')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async revokeToken(body: RevokeTokenRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.revokeTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/session/tokens/revoke')
      .setRequestSchema(revokeTokenRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async fetchUser(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.fetchUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/profile/get')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateUser(body: UpdateUserRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/profile/update')
      .setRequestSchema(updateUserRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async resetPassword(
    body: ResetPasswordRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.resetPasswordConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/reset/password/sent-otp')
      .setRequestSchema(resetPasswordRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async resetPasswordVerify(
    body: ResetPasswordVerifyRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.resetPasswordVerifyConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/reset/password/verify')
      .setRequestSchema(resetPasswordVerifyRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async convertUserByEmail(
    body: ConvertUserByEmailRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.convertUserByEmailConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/email/convert/user')
      .setRequestSchema(convertUserByEmailRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logInWithGoogle(
    body: LogInWithGoogleRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.logInWithGoogleConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/auth/google')
      .setRequestSchema(logInWithGoogleRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async pull(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.pullConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/v1/delivery/poll')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
