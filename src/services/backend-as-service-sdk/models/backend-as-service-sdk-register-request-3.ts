import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkRegisterRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkRegisterRequest3 = z.lazy(() => {
  return z.object({
    platform: z.string().optional().nullable(),
    userId: z.string().optional().nullable(),
    appVersion: z.string().optional().nullable(),
    deviceBrand: z.string().optional().nullable(),
    region: z.string().optional().nullable(),
    simOperatorName: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    age: z.number().optional().nullable(),
    deviceLanguage: z.string().optional().nullable(),
    osVersion: z.string().optional().nullable(),
    firstOpenAt: z.number().optional().nullable(),
    lastVisitAt: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkRegisterRequest3} backendAsServiceSdkRegisterRequest3
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type BackendAsServiceSdkRegisterRequest3 = z.infer<
  typeof backendAsServiceSdkRegisterRequest3
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkRegisterRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkRegisterRequest3Response = z.lazy(() => {
  return z
    .object({
      platform: z.string().optional().nullable(),
      userId: z.string().optional().nullable(),
      appVersion: z.string().optional().nullable(),
      deviceBrand: z.string().optional().nullable(),
      region: z.string().optional().nullable(),
      simOperatorName: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      age: z.number().optional().nullable(),
      deviceLanguage: z.string().optional().nullable(),
      osVersion: z.string().optional().nullable(),
      firstOpenAt: z.number().optional().nullable(),
      lastVisitAt: z.number().optional().nullable(),
    })
    .transform((data) => ({
      platform: data['platform'],
      userId: data['userId'],
      appVersion: data['appVersion'],
      deviceBrand: data['deviceBrand'],
      region: data['region'],
      simOperatorName: data['simOperatorName'],
      gender: data['gender'],
      age: data['age'],
      deviceLanguage: data['deviceLanguage'],
      osVersion: data['osVersion'],
      firstOpenAt: data['firstOpenAt'],
      lastVisitAt: data['lastVisitAt'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkRegisterRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkRegisterRequest3Request = z.lazy(() => {
  return z
    .object({
      platform: z.string().optional().nullable(),
      userId: z.string().optional().nullable(),
      appVersion: z.string().optional().nullable(),
      deviceBrand: z.string().optional().nullable(),
      region: z.string().optional().nullable(),
      simOperatorName: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      age: z.number().optional().nullable(),
      deviceLanguage: z.string().optional().nullable(),
      osVersion: z.string().optional().nullable(),
      firstOpenAt: z.number().optional().nullable(),
      lastVisitAt: z.number().optional().nullable(),
    })
    .transform((data) => ({
      platform: data['platform'],
      userId: data['userId'],
      appVersion: data['appVersion'],
      deviceBrand: data['deviceBrand'],
      region: data['region'],
      simOperatorName: data['simOperatorName'],
      gender: data['gender'],
      age: data['age'],
      deviceLanguage: data['deviceLanguage'],
      osVersion: data['osVersion'],
      firstOpenAt: data['firstOpenAt'],
      lastVisitAt: data['lastVisitAt'],
    }));
});
