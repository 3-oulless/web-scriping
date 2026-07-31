import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCountTenantRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCountTenantRequest2 = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCountTenantRequest2} backendAsServiceSdkCountTenantRequest2
 * @property {string}
 */
export type BackendAsServiceSdkCountTenantRequest2 = z.infer<
  typeof backendAsServiceSdkCountTenantRequest2
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCountTenantRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCountTenantRequest2Response = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCountTenantRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCountTenantRequest2Request = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});
