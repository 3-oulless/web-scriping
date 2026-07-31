import { z } from 'zod';

/**
 * Zod schema for the UpdateAccessRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateAccessRequest = z.lazy(() => {
  return z.object({
    roleId: z.string().optional().nullable(),
    access: z.array(z.string()).optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateAccessRequest} updateAccessRequest
 * @property {string}
 * @property {string[]}
 */
export type UpdateAccessRequest = z.infer<typeof updateAccessRequest>;

/**
 * Zod schema for mapping API responses to the UpdateAccessRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateAccessRequestResponse = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
      access: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
      access: data['access'],
    }));
});

/**
 * Zod schema for mapping the UpdateAccessRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateAccessRequestRequest = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
      access: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
      access: data['access'],
    }));
});
