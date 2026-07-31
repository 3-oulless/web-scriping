import { z } from 'zod';

/**
 * Zod schema for the InstallationDeactivateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const installationDeactivateRequest = z.lazy(() => {
  return z.object({
    installationId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {InstallationDeactivateRequest} installationDeactivateRequest
 * @property {string}
 */
export type InstallationDeactivateRequest = z.infer<typeof installationDeactivateRequest>;

/**
 * Zod schema for mapping API responses to the InstallationDeactivateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const installationDeactivateRequestResponse = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});

/**
 * Zod schema for mapping the InstallationDeactivateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const installationDeactivateRequestRequest = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});
