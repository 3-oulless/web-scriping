import { z } from 'zod';

/**
 * Zod schema for the UpdateRequestModelImageOnly model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateRequestModelImageOnly = z.lazy(() => {
  return z.object({
    image: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateRequestModelImageOnly} updateRequestModelImageOnly
 * @property {string}
 */
export type UpdateRequestModelImageOnly = z.infer<typeof updateRequestModelImageOnly>;

/**
 * Zod schema for mapping API responses to the UpdateRequestModelImageOnly application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestModelImageOnlyResponse = z.lazy(() => {
  return z
    .object({
      image: z.string().optional().nullable(),
    })
    .transform((data) => ({
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the UpdateRequestModelImageOnly application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestModelImageOnlyRequest = z.lazy(() => {
  return z
    .object({
      image: z.string().optional().nullable(),
    })
    .transform((data) => ({
      image: data['image'],
    }));
});
