import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkGetRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkGetRequest3 = z.lazy(() => {
  return z.object({
    ruleId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkGetRequest3} backendAsServiceSdkGetRequest3
 * @property {string}
 */
export type BackendAsServiceSdkGetRequest3 = z.infer<typeof backendAsServiceSdkGetRequest3>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkGetRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest3Response = z.lazy(() => {
  return z
    .object({
      ruleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      ruleId: data['ruleId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkGetRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest3Request = z.lazy(() => {
  return z
    .object({
      ruleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      ruleId: data['ruleId'],
    }));
});
