import { z } from 'zod';

/**
 * Zod schema for the UserBindRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const userBindRequest = z.lazy(() => {
  return z.object({
    installationId: z.string().optional().nullable(),
    userId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UserBindRequest} userBindRequest
 * @property {string}
 * @property {string}
 */
export type UserBindRequest = z.infer<typeof userBindRequest>;

/**
 * Zod schema for mapping API responses to the UserBindRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userBindRequestResponse = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the UserBindRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userBindRequestRequest = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
      userId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
      userId: data['userId'],
    }));
});
