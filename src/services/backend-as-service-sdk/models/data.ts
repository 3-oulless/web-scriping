import { z } from 'zod';

/**
 * Zod schema for the Data model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const data = z.lazy(() => {
  return z.object({
    text: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Data} data
 * @property {string}
 */
export type Data = z.infer<typeof data>;

/**
 * Zod schema for mapping API responses to the Data application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataResponse = z.lazy(() => {
  return z
    .object({
      text: z.string().optional().nullable(),
    })
    .transform((data) => ({
      text: data['text'],
    }));
});

/**
 * Zod schema for mapping the Data application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataRequest = z.lazy(() => {
  return z
    .object({
      text: z.string().optional().nullable(),
    })
    .transform((data) => ({
      text: data['text'],
    }));
});
