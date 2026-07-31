import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest7 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest7 = z.lazy(() => {
  return z.object({
    projectId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest7} backendAsServiceSdkUpdateRequest7
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest7 = z.infer<typeof backendAsServiceSdkUpdateRequest7>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest7 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest7Response = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest7 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest7Request = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
      name: data['name'],
    }));
});
