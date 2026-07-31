import { z } from 'zod';

/**
 * Zod schema for the DeActiveRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const deActiveRequest = z.lazy(() => {
  return z.object({
    configId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {DeActiveRequest} deActiveRequest
 * @property {string}
 */
export type DeActiveRequest = z.infer<typeof deActiveRequest>;

/**
 * Zod schema for mapping API responses to the DeActiveRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deActiveRequestResponse = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});

/**
 * Zod schema for mapping the DeActiveRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deActiveRequestRequest = z.lazy(() => {
  return z
    .object({
      configId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      configId: data['configId'],
    }));
});
