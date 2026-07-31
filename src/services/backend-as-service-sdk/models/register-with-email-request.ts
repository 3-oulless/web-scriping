import { z } from 'zod';

/**
 * Zod schema for the RegisterWithEmailRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const registerWithEmailRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {RegisterWithEmailRequest} registerWithEmailRequest
 * @property {string}
 */
export type RegisterWithEmailRequest = z.infer<typeof registerWithEmailRequest>;

/**
 * Zod schema for mapping API responses to the RegisterWithEmailRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const registerWithEmailRequestResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});

/**
 * Zod schema for mapping the RegisterWithEmailRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const registerWithEmailRequestRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});
