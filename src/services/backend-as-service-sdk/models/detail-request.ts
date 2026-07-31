import { z } from 'zod';

/**
 * Zod schema for the DetailRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const detailRequest = z.lazy(() => {
  return z.object({
    issueId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {DetailRequest} detailRequest
 * @property {string}
 */
export type DetailRequest = z.infer<typeof detailRequest>;

/**
 * Zod schema for mapping API responses to the DetailRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detailRequestResponse = z.lazy(() => {
  return z
    .object({
      issueId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      issueId: data['issueId'],
    }));
});

/**
 * Zod schema for mapping the DetailRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detailRequestRequest = z.lazy(() => {
  return z
    .object({
      issueId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      issueId: data['issueId'],
    }));
});
