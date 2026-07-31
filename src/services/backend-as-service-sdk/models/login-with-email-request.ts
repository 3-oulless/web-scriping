import { z } from 'zod';

/**
 * Zod schema for the LoginWithEmailRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const loginWithEmailRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoginWithEmailRequest} loginWithEmailRequest
 * @property {string}
 * @property {string}
 */
export type LoginWithEmailRequest = z.infer<typeof loginWithEmailRequest>;

/**
 * Zod schema for mapping API responses to the LoginWithEmailRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginWithEmailRequestResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
      password: data['password'],
    }));
});

/**
 * Zod schema for mapping the LoginWithEmailRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginWithEmailRequestRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
      password: data['password'],
    }));
});
