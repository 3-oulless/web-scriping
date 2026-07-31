import { z } from 'zod';

/**
 * Zod schema for the ByBrandRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const byBrandRequest = z.lazy(() => {
  return z.object({
    pushId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ByBrandRequest} byBrandRequest
 * @property {string}
 */
export type ByBrandRequest = z.infer<typeof byBrandRequest>;

/**
 * Zod schema for mapping API responses to the ByBrandRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byBrandRequestResponse = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});

/**
 * Zod schema for mapping the ByBrandRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const byBrandRequestRequest = z.lazy(() => {
  return z
    .object({
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pushId: data['pushId'],
    }));
});
