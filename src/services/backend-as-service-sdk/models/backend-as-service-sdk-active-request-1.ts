import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkActiveRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkActiveRequest1 = z.lazy(() => {
  return z.object({
    configId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkActiveRequest1} backendAsServiceSdkActiveRequest1
 * @property {string}
 */
export type BackendAsServiceSdkActiveRequest1 = z.infer<typeof backendAsServiceSdkActiveRequest1>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkActiveRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkActiveRequest1Response = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkActiveRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkActiveRequest1Request = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});
