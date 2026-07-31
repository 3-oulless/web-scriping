import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkListRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkListRequest3 = z.lazy(() => {
  return z.object({
    page: z.number().optional().nullable(),
    pageSize: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkListRequest3} backendAsServiceSdkListRequest3
 * @property {number}
 * @property {number}
 */
export type BackendAsServiceSdkListRequest3 = z.infer<typeof backendAsServiceSdkListRequest3>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkListRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest3Response = z.lazy(() => {
  return z
    .object({
      page: z.number().optional().nullable(),
      pageSize: z.number().optional().nullable(),
    })
    .transform((data) => ({
      page: data['page'],
      pageSize: data['pageSize'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkListRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest3Request = z.lazy(() => {
  return z
    .object({
      page: z.number().optional().nullable(),
      pageSize: z.number().optional().nullable(),
    })
    .transform((data) => ({
      page: data['page'],
      pageSize: data['pageSize'],
    }));
});
