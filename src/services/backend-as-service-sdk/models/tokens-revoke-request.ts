import { z } from 'zod';

/**
 * Zod schema for the TokensRevokeRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const tokensRevokeRequest = z.lazy(() => {
  return z.object({
    tokenId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TokensRevokeRequest} tokensRevokeRequest
 * @property {string}
 */
export type TokensRevokeRequest = z.infer<typeof tokensRevokeRequest>;

/**
 * Zod schema for mapping API responses to the TokensRevokeRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokensRevokeRequestResponse = z.lazy(() => {
  return z
    .object({
      tokenId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tokenId: data['tokenId'],
    }));
});

/**
 * Zod schema for mapping the TokensRevokeRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokensRevokeRequestRequest = z.lazy(() => {
  return z
    .object({
      tokenId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tokenId: data['tokenId'],
    }));
});
