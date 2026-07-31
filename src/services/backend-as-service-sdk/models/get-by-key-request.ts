import { z } from 'zod';

/**
 * Zod schema for the GetByKeyRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getByKeyRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    key: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {GetByKeyRequest} getByKeyRequest
 * @property {string}
 * @property {string}
 */
export type GetByKeyRequest = z.infer<typeof getByKeyRequest>;

/**
 * Zod schema for mapping API responses to the GetByKeyRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getByKeyRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      key: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      key: data['key'],
    }));
});

/**
 * Zod schema for mapping the GetByKeyRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getByKeyRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      key: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      key: data['key'],
    }));
});
