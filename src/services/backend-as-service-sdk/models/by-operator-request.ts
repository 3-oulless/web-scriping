import { z } from 'zod';

/**
 * Zod schema for the ByOperatorRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const byOperatorRequest = z.lazy(() => {
  return z.object({
    pushId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ByOperatorRequest} byOperatorRequest
 * @property {string}
 */
export type ByOperatorRequest = z.infer<typeof byOperatorRequest>;

/**
 * Zod schema for mapping API responses to the ByOperatorRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byOperatorRequestResponse = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});

/**
 * Zod schema for mapping the ByOperatorRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byOperatorRequestRequest = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});
