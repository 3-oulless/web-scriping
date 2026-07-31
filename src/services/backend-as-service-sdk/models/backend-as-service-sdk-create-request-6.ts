import { z } from 'zod';
import {
  CreateRequestModel,
  createRequestModel,
  createRequestModelRequest,
  createRequestModelResponse,
} from './create-request-model';
import {
  CreateRequestTarget,
  createRequestTarget,
  createRequestTargetRequest,
  createRequestTargetResponse,
} from './create-request-target';

/**
 * Zod schema for the BackendAsServiceSdkCreateRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const backendAsServiceSdkCreateRequest6 = z.lazy(() => {
  return z.object({
    appId: z.string().optional().nullable(),
    projectId: z.string().optional().nullable(),
    tenantId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    style: z.string().optional().nullable(),
    model: createRequestModel.optional().nullable(),
    target: createRequestTarget.optional().nullable(),
  });
});

/**
 *
 * @typedef  {BackendAsServiceSdkCreateRequest6} backendAsServiceSdkCreateRequest6
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {CreateRequestModel}
 * @property {CreateRequestTarget}
 */
export type BackendAsServiceSdkCreateRequest6 = z.infer<typeof backendAsServiceSdkCreateRequest6>;

/**
 * Zod schema for mapping API responses to the BackendAsServiceSdkCreateRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest6Response = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      style: z.string().optional().nullable(),
      model: createRequestModelResponse.optional().nullable(),
      target: createRequestTargetResponse.optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      projectId: data['projectId'],
      tenantId: data['tenantId'],
      name: data['name'],
      type: data['type'],
      style: data['style'],
      model: data['model'],
      target: data['target'],
    }));
});

/**
 * Zod schema for mapping the BackendAsServiceSdkCreateRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const backendAsServiceSdkCreateRequest6Request = z.lazy(() => {
  return z
    .object({
      appId: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      tenantId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      style: z.string().optional().nullable(),
      model: createRequestModelRequest.optional().nullable(),
      target: createRequestTargetRequest.optional().nullable(),
    })
    .transform((data) => ({
      appId: data['appId'],
      projectId: data['projectId'],
      tenantId: data['tenantId'],
      name: data['name'],
      type: data['type'],
      style: data['style'],
      model: data['model'],
      target: data['target'],
    }));
});
