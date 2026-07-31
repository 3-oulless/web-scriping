import { z } from 'zod';

/**
 * Zod schema for the ActiveTokensRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const activeTokensRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ActiveTokensRequest} activeTokensRequest
 * @property {string}
 */
export type ActiveTokensRequest = z.infer<typeof activeTokensRequest>;

/**
 * Zod schema for mapping API responses to the ActiveTokensRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const activeTokensRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});

/**
 * Zod schema for mapping the ActiveTokensRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const activeTokensRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
    }));
});
