import { z } from 'zod';

/**
 * Zod schema for the AppStatsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const appStatsRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    fromTimestamp: z.number().optional().nullable(),
    limit: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AppStatsRequest} appStatsRequest
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type AppStatsRequest = z.infer<typeof appStatsRequest>;

/**
 * Zod schema for mapping API responses to the AppStatsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const appStatsRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      fromTimestamp: z.number().optional().nullable(),
      limit: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      fromTimestamp: data['fromTimestamp'],
      limit: data['limit'],
    }));
});

/**
 * Zod schema for mapping the AppStatsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const appStatsRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      fromTimestamp: z.number().optional().nullable(),
      limit: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      fromTimestamp: data['fromTimestamp'],
      limit: data['limit'],
    }));
});
