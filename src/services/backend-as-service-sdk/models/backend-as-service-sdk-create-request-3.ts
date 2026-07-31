import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCreateRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCreateRequest3 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    key: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
    dataType: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCreateRequest3} backendAsServiceSdkCreateRequest3
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkCreateRequest3 = z.infer<typeof backendAsServiceSdkCreateRequest3>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCreateRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest3Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      key: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      dataType: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      name: data['name'],
      key: data['key'],
      value: data['value'],
      dataType: data['dataType'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCreateRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest3Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      key: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      dataType: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      name: data['name'],
      key: data['key'],
      value: data['value'],
      dataType: data['dataType'],
    }));
});
