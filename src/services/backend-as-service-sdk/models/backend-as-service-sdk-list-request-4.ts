import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkListRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkListRequest4 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    fromMs: z.number().optional().nullable(),
    toMs: z.number().optional().nullable(),
    page: z.number().optional().nullable(),
    size: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkListRequest4} backendAsServiceSdkListRequest4
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type BackendAsServiceSdkListRequest4 = z.infer<typeof backendAsServiceSdkListRequest4>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkListRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest4Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      fromMs: z.number().optional().nullable(),
      toMs: z.number().optional().nullable(),
      page: z.number().optional().nullable(),
      size: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      fromMs: data['fromMs'],
      toMs: data['toMs'],
      page: data['page'],
      size: data['size'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkListRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest4Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      fromMs: z.number().optional().nullable(),
      toMs: z.number().optional().nullable(),
      page: z.number().optional().nullable(),
      size: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      fromMs: data['fromMs'],
      toMs: data['toMs'],
      page: data['page'],
      size: data['size'],
    }));
});
