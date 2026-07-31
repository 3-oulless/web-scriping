import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCountTenantRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCountTenantRequest1 = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCountTenantRequest1} backendAsServiceSdkCountTenantRequest1
 * @property {string}
 */
export type BackendAsServiceSdkCountTenantRequest1 = z.infer<
  typeof backendAsServiceSdkCountTenantRequest1
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCountTenantRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCountTenantRequest1Response = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCountTenantRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCountTenantRequest1Request = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});
