import { z } from 'zod';

/**
 * Zod schema for the BackendAsServiceSdkRegisterRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkRegisterRequest2 = z.lazy(() => {
  return z.object({
    appName: z.string().optional().nullable(),
    projectId: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkRegisterRequest2} backendAsServiceSdkRegisterRequest2
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BackendAsServiceSdkRegisterRequest2 = z.infer<
  typeof backendAsServiceSdkRegisterRequest2
>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkRegisterRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkRegisterRequest2Response = z.lazy(() => {
  return z
    .object({
      appName: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appName: data['appName'],
      projectId: data['projectId'],
      type: data['type'],
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkRegisterRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkRegisterRequest2Request = z.lazy(() => {
  return z
    .object({
      appName: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appName: data['appName'],
      projectId: data['projectId'],
      type: data['type'],
      tenantId: data['tenantId'],
    }));
});
