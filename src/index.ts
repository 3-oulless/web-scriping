import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { BackendAsServiceSdkService } from './services/backend-as-service-sdk';

export * from './services/backend-as-service-sdk';

export * from './http';
export { Environment } from './http/environment';

export class BackendAsServiceSdk {
  public readonly backendAsServiceSdk: BackendAsServiceSdkService;

  constructor(public config: SdkConfig) {
    this.backendAsServiceSdk = new BackendAsServiceSdkService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.backendAsServiceSdk.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.backendAsServiceSdk.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.backendAsServiceSdk.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.backendAsServiceSdk.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
