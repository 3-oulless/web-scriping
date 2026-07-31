import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest4 = z.lazy(() => {
  return z.object({
    ruleId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest4} backendAsServiceSdkDeleteRequest4
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest4 = z.infer<typeof backendAsServiceSdkDeleteRequest4>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest4Response = z.lazy(() => {
  return z
    .object({
      ruleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      ruleId: data['ruleId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest4Request = z.lazy(() => {
  return z
    .object({
      ruleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      ruleId: data['ruleId'],
    }));
});
