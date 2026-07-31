/**
 * Available API environments with their base URLs.
 * Use these constants to configure the SDK for different environments (production, staging, etc.).
 */
export enum Environment {
  /** DEFAULT environment base URL */
  DEFAULT = 'https://baseUrl',
  /** BASEURL environment base URL */
  BASEURL = 'https://baseUrl',
  /** BASEURLPUSHGETWAY environment base URL */
  BASEURLPUSHGETWAY = 'https://baseUrlPushGetWay',
  /** BASEURLDEVICEREGISTRY environment base URL */
  BASEURLDEVICEREGISTRY = 'https://baseUrlDeviceRegistry',
  /** BASEURLAUTH environment base URL */
  BASEURLAUTH = 'https://baseUrlAuth',
  /** BASEURLPUSHDELIVERY environment base URL */
  BASEURLPUSHDELIVERY = 'https://baseUrlPushDelivery',
}
