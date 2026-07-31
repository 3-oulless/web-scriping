import { z } from 'zod';

/**
 * Zod schema for the UpdateRequestConditions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateRequestConditions = z.lazy(() => {
  return z.object({
    test: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateRequestConditions} updateRequestConditions
 * @property {number}
 */
export type UpdateRequestConditions = z.infer<typeof updateRequestConditions>;

/**
 * Zod schema for mapping API responses to the UpdateRequestConditions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestConditionsResponse = z.lazy(() => {
  return z
    .object({
      test: z.number().optional().nullable(),
    })
    .transform((data) => ({
      test: data['test'],
    }));
});

/**
 * Zod schema for mapping the UpdateRequestConditions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestConditionsRequest = z.lazy(() => {
  return z
    .object({
      test: z.number().optional().nullable(),
    })
    .transform((data) => ({
      test: data['test'],
    }));
});
