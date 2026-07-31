import { z } from 'zod';

/**
 * Zod schema for the PhoneRegisterVerifyRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const phoneRegisterVerifyRequest = z.lazy(() => {
  return z.object({
    phone: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {PhoneRegisterVerifyRequest} phoneRegisterVerifyRequest
 * @property {string}
 * @property {string}
 */
export type PhoneRegisterVerifyRequest = z.infer<typeof phoneRegisterVerifyRequest>;

/**
 * Zod schema for mapping API responses to the PhoneRegisterVerifyRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const phoneRegisterVerifyRequestResponse = z.lazy(() => {
  return z
    .object({
      phone: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone: data['phone'],
      code: data['code'],
    }));
});

/**
 * Zod schema for mapping the PhoneRegisterVerifyRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const phoneRegisterVerifyRequestRequest = z.lazy(() => {
  return z
    .object({
      phone: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone: data['phone'],
      code: data['code'],
    }));
});
