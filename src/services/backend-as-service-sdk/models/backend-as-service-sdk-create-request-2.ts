import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkCreateRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCreateRequest2 = z.lazy(() => {
  return z.object({
    username: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    roleId: z.string().optional().nullable(),
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCreateRequest2} backendAsServiceSdkCreateRequest2
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkCreateRequest2 = z.infer<typeof backendAsServiceSdkCreateRequest2>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCreateRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest2Response = z.lazy(() => {
  return z
    .object({
      username: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      roleId: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      username: data['username'],
      password: data['password'],
      role: data['role'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      roleId: data['roleId'],
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCreateRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest2Request = z.lazy(() => {
  return z
    .object({
      username: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      roleId: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      username: data['username'],
      password: data['password'],
      role: data['role'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      roleId: data['roleId'],
      tenantId: data['tenantId'],
    }));
});
