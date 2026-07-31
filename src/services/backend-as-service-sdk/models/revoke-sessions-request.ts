import { z } from 'zod';

/**
 * Zod schema for the RevokeSessionsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const revokeSessionsRequest = z.lazy(() => {
  return z.object({
    userId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {RevokeSessionsRequest} revokeSessionsRequest
 * @property {string}
 */
export type RevokeSessionsRequest = z.infer<typeof revokeSessionsRequest>;

/**
 * Zod schema for mapping API responses to the RevokeSessionsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeSessionsRequestResponse = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the RevokeSessionsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeSessionsRequestRequest = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
    }));
});
