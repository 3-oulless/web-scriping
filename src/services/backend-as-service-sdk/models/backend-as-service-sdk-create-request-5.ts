import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCreateRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCreateRequest5 = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCreateRequest5} backendAsServiceSdkCreateRequest5
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkCreateRequest5 = z.infer<typeof backendAsServiceSdkCreateRequest5>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCreateRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest5Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCreateRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest5Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      tenantId: data['tenantId'],
    }));
});
