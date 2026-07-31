import { z } from 'zod';

/**
 * Zod schema for the NewLast7DaysRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const newLast7DaysRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {NewLast7DaysRequest} newLast7DaysRequest
 * @property {string}
 */
export type NewLast7DaysRequest = z.infer<typeof newLast7DaysRequest>;

/**
 * Zod schema for mapping API responses to the NewLast7DaysRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const newLast7DaysRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});

/**
 * Zod schema for mapping the NewLast7DaysRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const newLast7DaysRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});
