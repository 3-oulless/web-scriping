import { z } from 'zod';

/**
 * Zod schema for the UnlockRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const unlockRequest = z.lazy(() => {
  return z.object({
    userId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UnlockRequest} unlockRequest
 * @property {string}
 */
export type UnlockRequest = z.infer<typeof unlockRequest>;

/**
 * Zod schema for mapping API responses to the UnlockRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const unlockRequestResponse = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the UnlockRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const unlockRequestRequest = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});
