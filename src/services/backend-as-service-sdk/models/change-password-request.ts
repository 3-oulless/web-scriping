import { z } from 'zod';

/**
 * Zod schema for the ChangePasswordRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const changePasswordRequest = z.lazy(() => {
  return z.object({
    currentPassword: z.string().optional().nullable(),
    newPassword: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ChangePasswordRequest} changePasswordRequest
 * @property {string}
 * @property {string}
 */
export type ChangePasswordRequest = z.infer<typeof changePasswordRequest>;

/**
 * Zod schema for mapping API responses to the ChangePasswordRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePasswordRequestResponse = z.lazy(() => {
  return z
    .object({
      currentPassword: z.string().optional().nullable(),
      newPassword: z.string().optional().nullable(),
    })
    .transform((data) => ({
      currentPassword: data['currentPassword'],
      newPassword: data['newPassword'],
    }));
});

/**
 * Zod schema for mapping the ChangePasswordRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePasswordRequestRequest = z.lazy(() => {
  return z
    .object({
      currentPassword: z.string().optional().nullable(),
      newPassword: z.string().optional().nullable(),
    })
    .transform((data) => ({
      currentPassword: data['currentPassword'],
      newPassword: data['newPassword'],
    }));
});
