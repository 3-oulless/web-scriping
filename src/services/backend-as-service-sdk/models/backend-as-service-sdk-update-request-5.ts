import { z } from 'zod';
import {
  UpdateRequestConditions,
  updateRequestConditions,
  updateRequestConditionsRequest,
  updateRequestConditionsResponse,
} from './update-request-conditions';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest5 = z.lazy(() => {
  return z.object({
    ruleId: z.string().optional().nullable(),
    priority: z.number().optional().nullable(),
    isActive: z.boolean().optional().nullable(),
    rolloutPercentage: z.number().optional().nullable(),
    conditions: updateRequestConditions.optional().nullable(),
    value: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest5} backendAsServiceSdkUpdateRequest5
 * @property {string}
 * @property {number}
 * @property {boolean}
 * @property {number}
 * @property {UpdateRequestConditions}
 * @property {string}
 */
export type BackendAsServiceSdkUpdateRequest5 = z.infer<typeof backendAsServiceSdkUpdateRequest5>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest5Response = z.lazy(() => {
  return z
    .object({
      ruleId: z.string().optional().nullable(),
      priority: z.number().optional().nullable(),
      isActive: z.boolean().optional().nullable(),
      rolloutPercentage: z.number().optional().nullable(),
      conditions: updateRequestConditionsResponse.optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      ruleId: data['ruleId'],
      priority: data['priority'],
      isActive: data['isActive'],
      rolloutPercentage: data['rolloutPercentage'],
      conditions: data['conditions'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest5Request = z.lazy(() => {
  return z
    .object({
      ruleId: z.string().optional().nullable(),
      priority: z.number().optional().nullable(),
      isActive: z.boolean().optional().nullable(),
      rolloutPercentage: z.number().optional().nullable(),
      conditions: updateRequestConditionsRequest.optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      ruleId: data['ruleId'],
      priority: data['priority'],
      isActive: data['isActive'],
      rolloutPercentage: data['rolloutPercentage'],
      conditions: data['conditions'],
      value: data['value'],
    }));
});
