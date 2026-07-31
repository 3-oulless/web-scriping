import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeActivateRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeActivateRequest4 = z.lazy(() => {
  return z.object({
    token: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeActivateRequest4} backendAsServiceSdkDeActivateRequest4
 * @property {string}
 */
export type BackendAsServiceSdkDeActivateRequest4 = z.infer<
  typeof backendAsServiceSdkDeActivateRequest4
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeActivateRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeActivateRequest4Response = z.lazy(() => {
  return z
    .object({
      token: z.string().optional().nullable(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeActivateRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeActivateRequest4Request = z.lazy(() => {
  return z
    .object({
      token: z.string().optional().nullable(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});
