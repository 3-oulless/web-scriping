import { z } from 'zod';

/**
 * Zod schema for the EmailRegisterVerifyRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const emailRegisterVerifyRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {EmailRegisterVerifyRequest} emailRegisterVerifyRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type EmailRegisterVerifyRequest = z.infer<typeof emailRegisterVerifyRequest>;

/**
 * Zod schema for mapping API responses to the EmailRegisterVerifyRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const emailRegisterVerifyRequestResponse = z.lazy(() => {
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
 * Zod schema for mapping the EmailRegisterVerifyRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const emailRegisterVerifyRequestRequest = z.lazy(() => {
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
