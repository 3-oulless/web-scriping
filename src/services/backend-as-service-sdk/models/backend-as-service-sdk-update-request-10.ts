import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest10 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest10 = z.lazy(() => {
  return z.object({
    token: z.string().optional().nullable(),
    userId: z.string().optional().nullable(),
    appVersion: z.string().optional().nullable(),
    region: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    age: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest10} backendAsServiceSdkUpdateRequest10
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type BackendAsServiceSdkUpdateRequest10 = z.infer<typeof backendAsServiceSdkUpdateRequest10>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest10 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest10Response = z.lazy(() => {
  return z
    .object({
      token: z.string().optional().nullable(),
      userId: z.string().optional().nullable(),
      appVersion: z.string().optional().nullable(),
      region: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      age: z.number().optional().nullable(),
    })
    .transform((data) => ({
      token: data['token'],
      userId: data['userId'],
      appVersion: data['appVersion'],
      region: data['region'],
      gender: data['gender'],
      age: data['age'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest10 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest10Request = z.lazy(() => {
  return z
    .object({
      token: z.string().optional().nullable(),
      userId: z.string().optional().nullable(),
      appVersion: z.string().optional().nullable(),
      region: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      age: z.number().optional().nullable(),
    })
    .transform((data) => ({
      token: data['token'],
      userId: data['userId'],
      appVersion: data['appVersion'],
      region: data['region'],
      gender: data['gender'],
      age: data['age'],
    }));
});
