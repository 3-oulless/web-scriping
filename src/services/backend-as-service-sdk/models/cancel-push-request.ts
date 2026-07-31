import { z } from 'zod';

/**
 * Zod schema for the CancelPushRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cancelPushRequest = z.lazy(() => {
  return z.object({
    apiKey: z.string().optional().nullable(),
    serverKey: z.string().optional().nullable(),
    pushId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CancelPushRequest} cancelPushRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type CancelPushRequest = z.infer<typeof cancelPushRequest>;

/**
 * Zod schema for mapping API responses to the CancelPushRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cancelPushRequestResponse = z.lazy(() => {
  return z
    .object({
      apiKey: z.string().optional().nullable(),
      serverKey: z.string().optional().nullable(),
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      apiKey: data['apiKey'],
      serverKey: data['serverKey'],
      pushId: data['pushId'],
    }));
});

/**
 * Zod schema for mapping the CancelPushRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cancelPushRequestRequest = z.lazy(() => {
  return z
    .object({
      apiKey: z.string().optional().nullable(),
      serverKey: z.string().optional().nullable(),
      pushId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      apiKey: data['apiKey'],
      serverKey: data['serverKey'],
      pushId: data['pushId'],
    }));
});
