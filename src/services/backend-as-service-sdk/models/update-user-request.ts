import { z } from 'zod';

/**
 * Zod schema for the UpdateUserRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateUserRequest = z.lazy(() => {
  return z.object({
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    birthDate: z.string().optional().nullable(),
    province: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateUserRequest} updateUserRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type UpdateUserRequest = z.infer<typeof updateUserRequest>;

/**
 * Zod schema for mapping API responses to the UpdateUserRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUserRequestResponse = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      birthDate: z.string().optional().nullable(),
      province: z.string().optional().nullable(),
      city: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
    })
    .transform((data) => ({
      firstName: data['firstName'],
      lastName: data['lastName'],
      gender: data['gender'],
      birthDate: data['birthDate'],
      province: data['province'],
      city: data['city'],
      address: data['address'],
    }));
});

/**
 * Zod schema for mapping the UpdateUserRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUserRequestRequest = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      birthDate: z.string().optional().nullable(),
      province: z.string().optional().nullable(),
      city: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
    })
    .transform((data) => ({
      firstName: data['firstName'],
      lastName: data['lastName'],
      gender: data['gender'],
      birthDate: data['birthDate'],
      province: data['province'],
      city: data['city'],
      address: data['address'],
    }));
});
