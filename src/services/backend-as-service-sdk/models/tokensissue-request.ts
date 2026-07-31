import { z } from 'zod';

/**
 * Zod schema for the TokensissueRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const tokensissueRequest = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    createdBy: z.string().optional().nullable(),
    expiresInDays: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TokensissueRequest} tokensissueRequest
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type TokensissueRequest = z.infer<typeof tokensissueRequest>;

/**
 * Zod schema for mapping API responses to the TokensissueRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokensissueRequestResponse = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      createdBy: z.string().optional().nullable(),
      expiresInDays: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      createdBy: data['createdBy'],
      expiresInDays: data['expiresInDays'],
    }));
});

/**
 * Zod schema for mapping the TokensissueRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokensissueRequestRequest = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      createdBy: z.string().optional().nullable(),
      expiresInDays: z.number().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      createdBy: data['createdBy'],
      expiresInDays: data['expiresInDays'],
    }));
});
