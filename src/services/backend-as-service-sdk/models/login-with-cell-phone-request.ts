import { z } from 'zod';

/**
 * Zod schema for the LoginWithCellPhoneRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const loginWithCellPhoneRequest = z.lazy(() => {
  return z.object({
    phone: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoginWithCellPhoneRequest} loginWithCellPhoneRequest
 * @property {string}
 */
export type LoginWithCellPhoneRequest = z.infer<typeof loginWithCellPhoneRequest>;

/**
 * Zod schema for mapping API responses to the LoginWithCellPhoneRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginWithCellPhoneRequestResponse = z.lazy(() => {
  return z
    .object({
      phone: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone: data['phone'],
    }));
});

/**
 * Zod schema for mapping the LoginWithCellPhoneRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginWithCellPhoneRequestRequest = z.lazy(() => {
  return z
    .object({
      phone: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone: data['phone'],
    }));
});
