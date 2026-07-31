import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkListRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkListRequest6 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkListRequest6} backendAsServiceSdkListRequest6
 * @property {string}
 */
export type BackendAsServiceSdkListRequest6 = z.infer<typeof backendAsServiceSdkListRequest6>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkListRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest6Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkListRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest6Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});
