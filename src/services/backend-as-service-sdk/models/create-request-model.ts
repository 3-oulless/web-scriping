import { z } from 'zod';
import {
  CreateRequestModelImageOnly,
  createRequestModelImageOnly,
  createRequestModelImageOnlyRequest,
  createRequestModelImageOnlyResponse,
} from './create-request-model-image-only';

/**
 * Zod schema for the CreateRequestModel model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createRequestModel = z.lazy(() => {
  return z.object({
    imageOnly: createRequestModelImageOnly.optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateRequestModel} createRequestModel
 * @property {CreateRequestModelImageOnly}
 */
export type CreateRequestModel = z.infer<typeof createRequestModel>;

/**
 * Zod schema for mapping API responses to the CreateRequestModel application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestModelResponse = z.lazy(() => {
  return z
    .object({
      ImageOnly: createRequestModelImageOnlyResponse.optional().nullable(),
    })
    .transform((data) => ({
      imageOnly: data['ImageOnly'],
    }));
});

/**
 * Zod schema for mapping the CreateRequestModel application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createRequestModelRequest = z.lazy(() => {
  return z
    .object({
      imageOnly: createRequestModelImageOnlyRequest.optional().nullable(),
    })
    .transform((data) => ({
      ImageOnly: data['imageOnly'],
    }));
});
