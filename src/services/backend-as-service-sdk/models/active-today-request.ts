import { z } from 'zod';

/**
 * Zod schema for the ActiveTodayRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const activeTodayRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ActiveTodayRequest} activeTodayRequest
 * @property {string}
 */
export type ActiveTodayRequest = z.infer<typeof activeTodayRequest>;

/**
 * Zod schema for mapping API responses to the ActiveTodayRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const activeTodayRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});

/**
 * Zod schema for mapping the ActiveTodayRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const activeTodayRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});
