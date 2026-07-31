import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkGetRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkGetRequest2 = z.lazy(() => {
  return z.object({
    configId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkGetRequest2} backendAsServiceSdkGetRequest2
 * @property {string}
 */
export type BackendAsServiceSdkGetRequest2 = z.infer<typeof backendAsServiceSdkGetRequest2>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkGetRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest2Response = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkGetRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkGetRequest2Request = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});
