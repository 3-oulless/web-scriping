import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest7 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest7 = z.lazy(() => {
  return z.object({
    userId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest7} backendAsServiceSdkDeleteRequest7
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest7 = z.infer<typeof backendAsServiceSdkDeleteRequest7>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest7 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest7Response = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest7 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest7Request = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});
