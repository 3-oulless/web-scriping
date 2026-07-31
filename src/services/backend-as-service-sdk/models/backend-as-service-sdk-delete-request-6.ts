import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest6 = z.lazy(() => {
  return z.object({
    messageId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest6} backendAsServiceSdkDeleteRequest6
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest6 = z.infer<typeof backendAsServiceSdkDeleteRequest6>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest6Response = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest6Request = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
    }));
});
