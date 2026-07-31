import { z } from 'zod';

/**
 * Zod schema for the ResetPasswordVerifyRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const resetPasswordVerifyRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ResetPasswordVerifyRequest} resetPasswordVerifyRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type ResetPasswordVerifyRequest = z.infer<typeof resetPasswordVerifyRequest>;

/**
 * Zod schema for mapping API responses to the ResetPasswordVerifyRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resetPasswordVerifyRequestResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
      password: data['password'],
      code: data['code'],
    }));
});

/**
 * Zod schema for mapping the ResetPasswordVerifyRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resetPasswordVerifyRequestRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
      password: data['password'],
      code: data['code'],
    }));
});
