import { z } from 'zod';
import {
  CreateRequestConditions,
  createRequestConditions,
  createRequestConditionsRequest,
  createRequestConditionsResponse,
} from './create-request-conditions';

/**
 * Zod schema for the BackendAsServiceSdkCreateRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCreateRequest4 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    configId: z.string().optional().nullable(),
    priority: z.number().optional().nullable(),
    rolloutPercentage: z.number().optional().nullable(),
    conditions: createRequestConditions.optional().nullable(),
    value: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCreateRequest4} backendAsServiceSdkCreateRequest4
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {CreateRequestConditions}
 * @property {string}
 */
export type BackendAsServiceSdkCreateRequest4 = z.infer<typeof backendAsServiceSdkCreateRequest4>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCreateRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest4Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      configId: z.string().optional().nullable(),
      priority: z.number().optional().nullable(),
      rolloutPercentage: z.number().optional().nullable(),
      conditions: createRequestConditionsResponse.optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      configId: data['configId'],
      priority: data['priority'],
      rolloutPercentage: data['rolloutPercentage'],
      conditions: data['conditions'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCreateRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest4Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      configId: z.string().optional().nullable(),
      priority: z.number().optional().nullable(),
      rolloutPercentage: z.number().optional().nullable(),
      conditions: createRequestConditionsRequest.optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      configId: data['configId'],
      priority: data['priority'],
      rolloutPercentage: data['rolloutPercentage'],
      conditions: data['conditions'],
      value: data['value'],
    }));
});
