import { z } from 'zod';

/**
 * Zod schema for the ConvertUserByEmailRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const convertUserByEmailRequest = z.lazy(() => {
  return z.object({
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ConvertUserByEmailRequest} convertUserByEmailRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type ConvertUserByEmailRequest = z.infer<typeof convertUserByEmailRequest>;

/**
 * Zod schema for mapping API responses to the ConvertUserByEmailRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const convertUserByEmailRequestResponse = z.lazy(() => {
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
 * Zod schema for mapping the ConvertUserByEmailRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const convertUserByEmailRequestRequest = z.lazy(() => {
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
