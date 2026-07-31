import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkDeleteRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkDeleteRequest5 = z.lazy(() => {
  return z.object({
    projectId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkDeleteRequest5} backendAsServiceSdkDeleteRequest5
 * @property {string}
 */
export type BackendAsServiceSdkDeleteRequest5 = z.infer<typeof backendAsServiceSdkDeleteRequest5>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkDeleteRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest5Response = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkDeleteRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkDeleteRequest5Request = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
    }));
});
