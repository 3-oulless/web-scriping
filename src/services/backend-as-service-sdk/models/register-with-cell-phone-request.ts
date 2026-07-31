import { z } from 'zod';

/**
 * Zod schema for the RegisterWithCellPhoneRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const registerWithCellPhoneRequest = z.lazy(() => {
  return z.object({
    phone: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {RegisterWithCellPhoneRequest} registerWithCellPhoneRequest
 * @property {string}
 */
export type RegisterWithCellPhoneRequest = z.infer<typeof registerWithCellPhoneRequest>;

/**
 * Zod schema for mapping API responses to the RegisterWithCellPhoneRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const registerWithCellPhoneRequestResponse = z.lazy(() => {
  return z
    .object({
      phone: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone: data['phone'],
    }));
});

/**
 * Zod schema for mapping the RegisterWithCellPhoneRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const registerWithCellPhoneRequestRequest = z.lazy(() => {
  return z
    .object({
      phone: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone: data['phone'],
    }));
});
