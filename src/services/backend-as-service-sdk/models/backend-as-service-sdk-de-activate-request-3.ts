import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeActivateRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeActivateRequest3 = z.lazy(() => {
  return z.object({
    installationId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeActivateRequest3} backendAsServiceSdkDeActivateRequest3
 * @property {string}
 */
export type BackendAsServiceSdkDeActivateRequest3 = z.infer<
  typeof backendAsServiceSdkDeActivateRequest3
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeActivateRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeActivateRequest3Response = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeActivateRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeActivateRequest3Request = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});
