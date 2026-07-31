import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCountRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCountRequest1 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCountRequest1} backendAsServiceSdkCountRequest1
 * @property {string}
 */
export type BackendAsServiceSdkCountRequest1 = z.infer<typeof backendAsServiceSdkCountRequest1>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCountRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCountRequest1Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCountRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCountRequest1Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});
