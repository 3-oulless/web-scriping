import { z } from 'zod';

/**
 * Zod schema for the RevokeRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const revokeRequest = z.lazy(() => {
  return z.object({
    tokenId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {RevokeRequest} revokeRequest
 * @property {string}
 */
export type RevokeRequest = z.infer<typeof revokeRequest>;

/**
 * Zod schema for mapping API responses to the RevokeRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeRequestResponse = z.lazy(() => {
  return z
    .object({
      tokenId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tokenId: data['tokenId'],
    }));
});

/**
 * Zod schema for mapping the RevokeRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeRequestRequest = z.lazy(() => {
  return z
    .object({
      tokenId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tokenId: data['tokenId'],
    }));
});
