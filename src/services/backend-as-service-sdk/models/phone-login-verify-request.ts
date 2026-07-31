import { z } from 'zod';

/**
 * Zod schema for the PhoneLoginVerifyRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const phoneLoginVerifyRequest = z.lazy(() => {
  return z.object({
    phone: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {PhoneLoginVerifyRequest} phoneLoginVerifyRequest
 * @property {string}
 * @property {string}
 */
export type PhoneLoginVerifyRequest = z.infer<typeof phoneLoginVerifyRequest>;

/**
 * Zod schema for mapping API responses to the PhoneLoginVerifyRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const phoneLoginVerifyRequestResponse = z.lazy(() => {
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
 * Zod schema for mapping the PhoneLoginVerifyRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const phoneLoginVerifyRequestRequest = z.lazy(() => {
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
