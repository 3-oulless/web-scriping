import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest6 = z.lazy(() => {
  return z.object({
    configId: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest6} backendAsServiceSdkUpdateRequest6
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest6 = z.infer<typeof backendAsServiceSdkUpdateRequest6>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest6Response = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest6Request = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
      value: data['value'],
    }));
});
