import { z } from 'zod';

/**
 * Zod schema for the LoginWithDolatManRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const loginWithDolatManRequest = z.lazy(() => {
  return z.object({
    code: z.string().optional().nullable(),
    myGovClientId: z.string().optional().nullable(),
    myGovClientSecret: z.string().optional().nullable(),
    myGovRedirectUri: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoginWithDolatManRequest} loginWithDolatManRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type LoginWithDolatManRequest = z.infer<typeof loginWithDolatManRequest>;

/**
 * Zod schema for mapping API responses to the LoginWithDolatManRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginWithDolatManRequestResponse = z.lazy(() => {
  return z
    .object({
      code: z.string().optional().nullable(),
      myGovClientId: z.string().optional().nullable(),
      myGovClientSecret: z.string().optional().nullable(),
      myGovRedirectUri: z.string().optional().nullable(),
    })
    .transform((data) => ({
      code: data['code'],
      myGovClientId: data['myGovClientId'],
      myGovClientSecret: data['myGovClientSecret'],
      myGovRedirectUri: data['myGovRedirectUri'],
    }));
});

/**
 * Zod schema for mapping the LoginWithDolatManRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const loginWithDolatManRequestRequest = z.lazy(() => {
  return z
    .object({
      code: z.string().optional().nullable(),
      myGovClientId: z.string().optional().nullable(),
      myGovClientSecret: z.string().optional().nullable(),
      myGovRedirectUri: z.string().optional().nullable(),
    })
    .transform((data) => ({
      code: data['code'],
      myGovClientId: data['myGovClientId'],
      myGovClientSecret: data['myGovClientSecret'],
      myGovRedirectUri: data['myGovRedirectUri'],
    }));
});
