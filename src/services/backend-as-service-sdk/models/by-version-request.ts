import { z } from 'zod';

/**
 * Zod schema for the ByVersionRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const byVersionRequest = z.lazy(() => {
  return z.object({
    pushId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ByVersionRequest} byVersionRequest
 * @property {string}
 */
export type ByVersionRequest = z.infer<typeof byVersionRequest>;

/**
 * Zod schema for mapping API responses to the ByVersionRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byVersionRequestResponse = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});

/**
 * Zod schema for mapping the ByVersionRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byVersionRequestRequest = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});
