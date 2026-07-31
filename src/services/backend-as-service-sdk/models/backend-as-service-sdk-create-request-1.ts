import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCreateRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCreateRequest1 = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
    contactEmail: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCreateRequest1} backendAsServiceSdkCreateRequest1
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkCreateRequest1 = z.infer<typeof backendAsServiceSdkCreateRequest1>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCreateRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest1Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      contactEmail: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      code: data['code'],
      contactEmail: data['contactEmail'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCreateRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest1Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      contactEmail: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      code: data['code'],
      contactEmail: data['contactEmail'],
    }));
});
