import { z } from 'zod';

/**
 * Zod schema for the SendRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sendRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    body: z.string().optional().nullable(),
    targetType: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SendRequest} sendRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SendRequest = z.infer<typeof sendRequest>;

/**
 * Zod schema for mapping API responses to the SendRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sendRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      body: z.string().optional().nullable(),
      targetType: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      title: data['title'],
      body: data['body'],
      targetType: data['targetType'],
    }));
});

/**
 * Zod schema for mapping the SendRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sendRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      body: z.string().optional().nullable(),
      targetType: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      title: data['title'],
      body: data['body'],
      targetType: data['targetType'],
    }));
});
