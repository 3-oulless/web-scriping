import { z } from 'zod';

/**
 * Zod schema for the ListByProjectRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listByProjectRequest = z.lazy(() => {
  return z.object({
    projectId: z.string().optional().nullable(),
    limit: z.number().optional().nullable(),
    offset: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ListByProjectRequest} listByProjectRequest
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type ListByProjectRequest = z.infer<typeof listByProjectRequest>;

/**
 * Zod schema for mapping API responses to the ListByProjectRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listByProjectRequestResponse = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
      limit: z.number().optional().nullable(),
      offset: z.number().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
      limit: data['limit'],
      offset: data['offset'],
    }));
});

/**
 * Zod schema for mapping the ListByProjectRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listByProjectRequestRequest = z.lazy(() => {
  return z
    .object({
      projectId: z.string().optional().nullable(),
      limit: z.number().optional().nullable(),
      offset: z.number().optional().nullable(),
    })
    .transform((data) => ({
      projectId: data['projectId'],
      limit: data['limit'],
      offset: data['offset'],
    }));
});
