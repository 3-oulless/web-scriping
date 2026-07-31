import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest1 = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
    contactEmail: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest1} backendAsServiceSdkUpdateRequest1
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest1 = z.infer<typeof backendAsServiceSdkUpdateRequest1>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest1Response = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      contactEmail: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
      name: data['name'],
      code: data['code'],
      contactEmail: data['contactEmail'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest1Request = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      contactEmail: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
      name: data['name'],
      code: data['code'],
      contactEmail: data['contactEmail'],
    }));
});
