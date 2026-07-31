import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeActivateRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeActivateRequest1 = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeActivateRequest1} backendAsServiceSdkDeActivateRequest1
 * @property {string}
 */
export type BackendAsServiceSdkDeActivateRequest1 = z.infer<
  typeof backendAsServiceSdkDeActivateRequest1
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeActivateRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeActivateRequest1Response = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeActivateRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeActivateRequest1Request = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});
