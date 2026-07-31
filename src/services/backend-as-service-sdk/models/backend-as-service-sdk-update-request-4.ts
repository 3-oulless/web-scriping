import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest4 = z.lazy(() => {
  return z.object({
    configId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
    dataType: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest4} backendAsServiceSdkUpdateRequest4
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest4 = z.infer<typeof backendAsServiceSdkUpdateRequest4>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest4Response = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      dataType: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
      name: data['name'],
      value: data['value'],
      dataType: data['dataType'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest4Request = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      dataType: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
      name: data['name'],
      value: data['value'],
      dataType: data['dataType'],
    }));
});
