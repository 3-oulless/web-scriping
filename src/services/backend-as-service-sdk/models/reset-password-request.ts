import { z } from 'zod';

/**
 * Zod schema for the ResetPasswordRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const resetPasswordRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ResetPasswordRequest} resetPasswordRequest
 * @property {string}
 */
export type ResetPasswordRequest = z.infer<typeof resetPasswordRequest>;

/**
 * Zod schema for mapping API responses to the ResetPasswordRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resetPasswordRequestResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});

/**
 * Zod schema for mapping the ResetPasswordRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resetPasswordRequestRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});
