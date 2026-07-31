import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkActivateRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkActivateRequest2 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkActivateRequest2} backendAsServiceSdkActivateRequest2
 * @property {string}
 */
export type BackendAsServiceSdkActivateRequest2 = z.infer<
  typeof backendAsServiceSdkActivateRequest2
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkActivateRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkActivateRequest2Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkActivateRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkActivateRequest2Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});
