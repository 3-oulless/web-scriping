import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest9 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest9 = z.lazy(() => {
  return z.object({
    roleId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    symbol: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest9} backendAsServiceSdkUpdateRequest9
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest9 = z.infer<typeof backendAsServiceSdkUpdateRequest9>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest9 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest9Response = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      symbol: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
      name: data['name'],
      symbol: data['symbol'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest9 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest9Request = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      symbol: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
      name: data['name'],
      symbol: data['symbol'],
      description: data['description'],
    }));
});
