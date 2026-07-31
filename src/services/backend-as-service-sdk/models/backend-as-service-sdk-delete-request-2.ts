import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest2 = z.lazy(() => {
  return z.object({
    userId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest2} backendAsServiceSdkDeleteRequest2
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest2 = z.infer<typeof backendAsServiceSdkDeleteRequest2>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest2Response = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest2Request = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});
