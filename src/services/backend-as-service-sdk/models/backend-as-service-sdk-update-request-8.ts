import { z } from 'zod';
import {
  UpdateRequestModel,
  updateRequestModel,
  updateRequestModelRequest,
  updateRequestModelResponse,
} from './update-request-model';
import {
  UpdateRequestTarget,
  updateRequestTarget,
  updateRequestTargetRequest,
  updateRequestTargetResponse,
} from './update-request-target';

/**
 * Zod schema for the BackendAsServiceSdkUpdateRequest8 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkUpdateRequest8 = z.lazy(() => {
  return z.object({
    messageId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    style: z.string().optional().nullable(),
    model: updateRequestModel.optional().nullable(),
    target: updateRequestTarget.optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkUpdateRequest8} backendAsServiceSdkUpdateRequest8
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {UpdateRequestModel}
 * @property {UpdateRequestTarget}
 */
export type BackendAsServiceSdkUpdateRequest8 = z.infer<typeof backendAsServiceSdkUpdateRequest8>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkUpdateRequest8 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest8Response = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      style: z.string().optional().nullable(),
      model: updateRequestModelResponse.optional().nullable(),
      target: updateRequestTargetResponse.optional().nullable(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
      name: data['name'],
      type: data['type'],
      style: data['style'],
      model: data['model'],
      target: data['target'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkUpdateRequest8 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkUpdateRequest8Request = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      style: z.string().optional().nullable(),
      model: updateRequestModelRequest.optional().nullable(),
      target: updateRequestTargetRequest.optional().nullable(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
      name: data['name'],
      type: data['type'],
      style: data['style'],
      model: data['model'],
      target: data['target'],
    }));
});
