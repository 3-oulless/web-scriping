import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkActiveRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkActiveRequest2 = z.lazy(() => {
  return z.object({
    installationId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkActiveRequest2} backendAsServiceSdkActiveRequest2
 * @property {string}
 */
export type BackendAsServiceSdkActiveRequest2 = z.infer<typeof backendAsServiceSdkActiveRequest2>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkActiveRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkActiveRequest2Response = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkActiveRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkActiveRequest2Request = z.lazy(() => {
  return z
    .object({
      installationId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      installationId: data['installationId'],
    }));
});
