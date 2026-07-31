import { z } from 'zod';

/**
 * Zod schema for the LogInWithGoogleRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const logInWithGoogleRequest = z.lazy(() => {
  return z.object({
    googleIdToken: z.string().optional().nullable(),
    googleClientId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LogInWithGoogleRequest} logInWithGoogleRequest
 * @property {string}
 * @property {string}
 */
export type LogInWithGoogleRequest = z.infer<typeof logInWithGoogleRequest>;

/**
 * Zod schema for mapping API responses to the LogInWithGoogleRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const logInWithGoogleRequestResponse = z.lazy(() => {
  return z
    .object({
      googleIdToken: z.string().optional().nullable(),
      googleClientId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      googleIdToken: data['googleIdToken'],
      googleClientId: data['googleClientId'],
    }));
});

/**
 * Zod schema for mapping the LogInWithGoogleRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const logInWithGoogleRequestRequest = z.lazy(() => {
  return z
    .object({
      googleIdToken: z.string().optional().nullable(),
      googleClientId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      googleIdToken: data['googleIdToken'],
      googleClientId: data['googleClientId'],
    }));
});
