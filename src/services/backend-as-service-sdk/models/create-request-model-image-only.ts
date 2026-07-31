import { z } from 'zod';

/**
 * Zod schema for the CreateRequestModelImageOnly model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createRequestModelImageOnly = z.lazy(() => {
  return z.object({
    image: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateRequestModelImageOnly} createRequestModelImageOnly
 * @property {string}
 */
export type CreateRequestModelImageOnly = z.infer<typeof createRequestModelImageOnly>;

/**
 * Zod schema for mapping API responses to the CreateRequestModelImageOnly application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestModelImageOnlyResponse = z.lazy(() => {
  return z
    .object({
      image: z.string().optional().nullable(),
    })
    .transform((data) => ({
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the CreateRequestModelImageOnly application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestModelImageOnlyRequest = z.lazy(() => {
  return z
    .object({
      image: z.string().optional().nullable(),
    })
    .transform((data) => ({
      image: data['image'],
    }));
});
