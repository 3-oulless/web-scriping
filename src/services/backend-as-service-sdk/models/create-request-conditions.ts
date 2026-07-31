import { z } from 'zod';

/**
 * Zod schema for the CreateRequestConditions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createRequestConditions = z.lazy(() => {
  return z.object({
    test: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateRequestConditions} createRequestConditions
 * @property {number}
 */
export type CreateRequestConditions = z.infer<typeof createRequestConditions>;

/**
 * Zod schema for mapping API responses to the CreateRequestConditions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestConditionsResponse = z.lazy(() => {
  return z
    .object({
      test: z.number().optional().nullable(),
    })
    .transform((data) => ({
      test: data['test'],
    }));
});

/**
 * Zod schema for mapping the CreateRequestConditions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestConditionsRequest = z.lazy(() => {
  return z
    .object({
      test: z.number().optional().nullable(),
    })
    .transform((data) => ({
      test: data['test'],
    }));
});
