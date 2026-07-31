import { z } from 'zod';

/**
 * Zod schema for the InstallationGetRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const installationGetRequest = z.lazy(() => {
  return z.object({
    installationId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {InstallationGetRequest} installationGetRequest
 * @property {string}
 */
export type InstallationGetRequest = z.infer<typeof installationGetRequest>;

/**
 * Zod schema for mapping API responses to the InstallationGetRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const installationGetRequestResponse = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});

/**
 * Zod schema for mapping the InstallationGetRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const installationGetRequestRequest = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});
