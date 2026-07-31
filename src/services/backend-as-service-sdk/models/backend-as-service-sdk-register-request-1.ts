import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkRegisterRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkRegisterRequest1 = z.lazy(() => {
  return z.object({
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    cellphone: z.number().optional().nullable(),
    otpCode: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkRegisterRequest1} backendAsServiceSdkRegisterRequest1
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type BackendAsServiceSdkRegisterRequest1 = z.infer<
  typeof backendAsServiceSdkRegisterRequest1
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkRegisterRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkRegisterRequest1Response = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      username: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      cellphone: z.number().optional().nullable(),
      otpCode: z.number().optional().nullable(),
    })
    .transform((data) => ({
      firstName: data['firstName'],
      lastName: data['lastName'],
      username: data['username'],
      password: data['password'],
      cellphone: data['cellphone'],
      otpCode: data['otpCode'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkRegisterRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkRegisterRequest1Request = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      username: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      cellphone: z.number().optional().nullable(),
      otpCode: z.number().optional().nullable(),
    })
    .transform((data) => ({
      firstName: data['firstName'],
      lastName: data['lastName'],
      username: data['username'],
      password: data['password'],
      cellphone: data['cellphone'],
      otpCode: data['otpCode'],
    }));
});
