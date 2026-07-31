import { z } from 'zod';

/**
 * Zod schema for the Targeting model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const targeting = z.lazy(() => {
  return z.object({
    gender: z.string().optional().nullable(),
    ageMin: z.number().optional().nullable(),
    ageMax: z.number().optional().nullable(),
    region: z.string().optional().nullable(),
    simOperatorName: z.string().optional().nullable(),
    deviceBrand: z.string().optional().nullable(),
    appVersion: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Targeting} targeting
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type Targeting = z.infer<typeof targeting>;

/**
 * Zod schema for mapping API responses to the Targeting application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const targetingResponse = z.lazy(() => {
  return z
    .object({
      gender: z.string().optional().nullable(),
      ageMin: z.number().optional().nullable(),
      ageMax: z.number().optional().nullable(),
      region: z.string().optional().nullable(),
      simOperatorName: z.string().optional().nullable(),
      deviceBrand: z.string().optional().nullable(),
      appVersion: z.string().optional().nullable(),
    })
    .transform((data) => ({
      gender: data['gender'],
      ageMin: data['ageMin'],
      ageMax: data['ageMax'],
      region: data['region'],
      simOperatorName: data['simOperatorName'],
      deviceBrand: data['deviceBrand'],
      appVersion: data['appVersion'],
    }));
});

/**
 * Zod schema for mapping the Targeting application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const targetingRequest = z.lazy(() => {
  return z
    .object({
      gender: z.string().optional().nullable(),
      ageMin: z.number().optional().nullable(),
      ageMax: z.number().optional().nullable(),
      region: z.string().optional().nullable(),
      simOperatorName: z.string().optional().nullable(),
      deviceBrand: z.string().optional().nullable(),
      appVersion: z.string().optional().nullable(),
    })
    .transform((data) => ({
      gender: data['gender'],
      ageMin: data['ageMin'],
      ageMax: data['ageMax'],
      region: data['region'],
      simOperatorName: data['simOperatorName'],
      deviceBrand: data['deviceBrand'],
      appVersion: data['appVersion'],
    }));
});
