import { z } from 'zod';

/**
 * Zod schema for the LoginRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const loginRequest = z.lazy(() => {
  return z.object({
    username: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoginRequest} loginRequest
 * @property {string}
 * @property {string}
 */
export type LoginRequest = z.infer<typeof loginRequest>;

/**
 * Zod schema for mapping API responses to the LoginRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginRequestResponse = z.lazy(() => {
  return z
    .object({
      username: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
    })
    .transform((data) => ({
      username: data['username'],
      password: data['password'],
    }));
});

/**
 * Zod schema for mapping the LoginRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginRequestRequest = z.lazy(() => {
  return z
    .object({
      username: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
    })
    .transform((data) => ({
      username: data['username'],
      password: data['password'],
    }));
});
