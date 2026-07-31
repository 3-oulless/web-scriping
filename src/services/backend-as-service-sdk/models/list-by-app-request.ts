import { z } from 'zod';

/**
 * Zod schema for the ListByAppRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listByAppRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    limit: z.number().optional().nullable(),
    offset: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ListByAppRequest} listByAppRequest
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type ListByAppRequest = z.infer<typeof listByAppRequest>;

/**
 * Zod schema for mapping API responses to the ListByAppRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listByAppRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      limit: z.number().optional().nullable(),
      offset: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      limit: data['limit'],
      offset: data['offset'],
    }));
});

/**
 * Zod schema for mapping the ListByAppRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listByAppRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      limit: z.number().optional().nullable(),
      offset: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      limit: data['limit'],
      offset: data['offset'],
    }));
});
