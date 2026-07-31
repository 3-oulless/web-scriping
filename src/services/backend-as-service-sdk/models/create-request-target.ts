import { z } from 'zod';

/**
 * Zod schema for the CreateRequestTarget model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createRequestTarget = z.lazy(() => {
  return z.object({
    users: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateRequestTarget} createRequestTarget
 * @property {string}
 */
export type CreateRequestTarget = z.infer<typeof createRequestTarget>;

/**
 * Zod schema for mapping API responses to the CreateRequestTarget application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestTargetResponse = z.lazy(() => {
  return z
    .object({
      users: z.string().optional().nullable(),
    })
    .transform((data) => ({
      users: data['users'],
    }));
});

/**
 * Zod schema for mapping the CreateRequestTarget application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestTargetRequest = z.lazy(() => {
  return z
    .object({
      users: z.string().optional().nullable(),
    })
    .transform((data) => ({
      users: data['users'],
    }));
});
