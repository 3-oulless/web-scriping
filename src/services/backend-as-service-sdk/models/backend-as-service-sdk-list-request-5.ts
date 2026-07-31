import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkListRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkListRequest5 = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkListRequest5} backendAsServiceSdkListRequest5
 * @property {string}
 */
export type BackendAsServiceSdkListRequest5 = z.infer<typeof backendAsServiceSdkListRequest5>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkListRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest5Response = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkListRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest5Request = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});
