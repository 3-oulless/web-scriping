import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest3 = z.lazy(() => {
  return z.object({
    configId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest3} backendAsServiceSdkDeleteRequest3
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest3 = z.infer<typeof backendAsServiceSdkDeleteRequest3>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest3Response = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest3Request = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});
