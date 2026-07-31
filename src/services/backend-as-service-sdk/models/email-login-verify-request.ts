import { z } from 'zod';

/**
 * Zod schema for the EmailLoginVerifyRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const emailLoginVerifyRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {EmailLoginVerifyRequest} emailLoginVerifyRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type EmailLoginVerifyRequest = z.infer<typeof emailLoginVerifyRequest>;

/**
 * Zod schema for mapping API responses to the EmailLoginVerifyRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const emailLoginVerifyRequestResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
      code: data['code'],
      password: data['password'],
    }));
});

/**
 * Zod schema for mapping the EmailLoginVerifyRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const emailLoginVerifyRequestRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
    })
    .transform((data) => ({
      email: data['email'],
      code: data['code'],
      password: data['password'],
    }));
});
