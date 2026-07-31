import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest3 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    appName: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest3} backendAsServiceSdkUpdateRequest3
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest3 = z.infer<typeof backendAsServiceSdkUpdateRequest3>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest3Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      appName: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      appName: data['appName'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest3Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      appName: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      appName: data['appName'],
    }));
});
