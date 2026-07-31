import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkGetRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkGetRequest6 = z.lazy(() => {
  return z.object({
    roleId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkGetRequest6} backendAsServiceSdkGetRequest6
 * @property {string}
 */
export type BackendAsServiceSdkGetRequest6 = z.infer<typeof backendAsServiceSdkGetRequest6>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkGetRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest6Response = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkGetRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest6Request = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
    }));
});
