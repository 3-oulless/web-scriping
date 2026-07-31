import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkGetRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkGetRequest1 = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkGetRequest1} backendAsServiceSdkGetRequest1
 * @property {string}
 */
export type BackendAsServiceSdkGetRequest1 = z.infer<typeof backendAsServiceSdkGetRequest1>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkGetRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest1Response = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkGetRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest1Request = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});
