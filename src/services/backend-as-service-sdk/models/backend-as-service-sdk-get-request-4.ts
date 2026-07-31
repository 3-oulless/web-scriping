import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkGetRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkGetRequest4 = z.lazy(() => {
  return z.object({
    messageId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkGetRequest4} backendAsServiceSdkGetRequest4
 * @property {string}
 */
export type BackendAsServiceSdkGetRequest4 = z.infer<typeof backendAsServiceSdkGetRequest4>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkGetRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest4Response = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkGetRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest4Request = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
    }));
});
