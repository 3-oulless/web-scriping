import { z } from 'zod';

/**
 * Zod schema for the AccessByRoleRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const accessByRoleRequest = z.lazy(() => {
  return z.object({
    roleId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AccessByRoleRequest} accessByRoleRequest
 * @property {string}
 */
export type AccessByRoleRequest = z.infer<typeof accessByRoleRequest>;

/**
 * Zod schema for mapping API responses to the AccessByRoleRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accessByRoleRequestResponse = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
    }));
});

/**
 * Zod schema for mapping the AccessByRoleRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accessByRoleRequestRequest = z.lazy(() => {
  return z
    .object({
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      roleId: data['roleId'],
    }));
});
