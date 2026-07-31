import { z } from 'zod';

/**
 * Zod schema for the RevokeTokenRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const revokeTokenRequest = z.lazy(() => {
  return z.object({
    tokenId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {RevokeTokenRequest} revokeTokenRequest
 * @property {string}
 */
export type RevokeTokenRequest = z.infer<typeof revokeTokenRequest>;

/**
 * Zod schema for mapping API responses to the RevokeTokenRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeTokenRequestResponse = z.lazy(() => {
  return z
    .object({
      tokenId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tokenId: data['tokenId'],
    }));
});

/**
 * Zod schema for mapping the RevokeTokenRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeTokenRequestRequest = z.lazy(() => {
  return z
    .object({
      tokenId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tokenId: data['tokenId'],
    }));
});
