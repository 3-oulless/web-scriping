import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkListRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkListRequest1 = z.lazy(() => {
  return z.object({
    projectId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkListRequest1} backendAsServiceSdkListRequest1
 * @property {string}
 */
export type BackendAsServiceSdkListRequest1 = z.infer<typeof backendAsServiceSdkListRequest1>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkListRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest1Response = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkListRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkListRequest1Request = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
    }));
});
