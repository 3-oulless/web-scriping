import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest2 = z.lazy(() => {
  return z.object({
    userId: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    cellphone: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    roleId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest2} backendAsServiceSdkUpdateRequest2
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest2 = z.infer<typeof backendAsServiceSdkUpdateRequest2>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest2Response = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      cellphone: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
      role: data['role'],
      cellphone: data['cellphone'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      roleId: data['roleId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest2Request = z.lazy(() => {
  return z
    .object({
      userId: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      cellphone: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      roleId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userId: data['userId'],
      role: data['role'],
      cellphone: data['cellphone'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      roleId: data['roleId'],
    }));
});
