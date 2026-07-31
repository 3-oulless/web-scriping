import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkGetRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkGetRequest5 = z.lazy(() => {
  return z.object({
    userId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkGetRequest5} backendAsServiceSdkGetRequest5
 * @property {string}
 */
export type BackendAsServiceSdkGetRequest5 = z.infer<typeof backendAsServiceSdkGetRequest5>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkGetRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest5Response = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkGetRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest5Request = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});
