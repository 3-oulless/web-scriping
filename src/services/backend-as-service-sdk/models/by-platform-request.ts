import { z } from 'zod';

/**
 * Zod schema for the ByPlatformRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const byPlatformRequest = z.lazy(() => {
  return z.object({
    pushId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ByPlatformRequest} byPlatformRequest
 * @property {string}
 */
export type ByPlatformRequest = z.infer<typeof byPlatformRequest>;

/**
 * Zod schema for mapping API responses to the ByPlatformRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byPlatformRequestResponse = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});

/**
 * Zod schema for mapping the ByPlatformRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byPlatformRequestRequest = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});
