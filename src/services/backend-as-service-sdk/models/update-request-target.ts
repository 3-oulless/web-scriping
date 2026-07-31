import { z } from 'zod';

/**
 * Zod schema for the UpdateRequestTarget model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateRequestTarget = z.lazy(() => {
  return z.object({
    users: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateRequestTarget} updateRequestTarget
 * @property {string}
 */
export type UpdateRequestTarget = z.infer<typeof updateRequestTarget>;

/**
 * Zod schema for mapping API responses to the UpdateRequestTarget application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestTargetResponse = z.lazy(() => {
  return z
    .object({
      users: z.string().optional().nullable(),
    })
    .transform((data) => ({
      users: data['users'],
    }));
});

/**
 * Zod schema for mapping the UpdateRequestTarget application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestTargetRequest = z.lazy(() => {
  return z
    .object({
      users: z.string().optional().nullable(),
    })
    .transform((data) => ({
      users: data['users'],
    }));
});
