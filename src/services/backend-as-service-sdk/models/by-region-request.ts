import { z } from 'zod';

/**
 * Zod schema for the ByRegionRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const byRegionRequest = z.lazy(() => {
  return z.object({
    pushId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ByRegionRequest} byRegionRequest
 * @property {string}
 */
export type ByRegionRequest = z.infer<typeof byRegionRequest>;

/**
 * Zod schema for mapping API responses to the ByRegionRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byRegionRequestResponse = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});

/**
 * Zod schema for mapping the ByRegionRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byRegionRequestRequest = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});
