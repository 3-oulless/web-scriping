import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest8 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest8 = z.lazy(() => {
  return z.object({
    roleId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest8} backendAsServiceSdkDeleteRequest8
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest8 = z.infer<typeof backendAsServiceSdkDeleteRequest8>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest8 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest8Response = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest8 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest8Request = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
    }));
});
