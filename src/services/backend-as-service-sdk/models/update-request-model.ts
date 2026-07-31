import { z } from 'zod';
import {
  UpdateRequestModelImageOnly,
  updateRequestModelImageOnly,
  updateRequestModelImageOnlyRequest,
  updateRequestModelImageOnlyResponse,
} from './update-request-model-image-only';

/**
 * Zod schema for the UpdateRequestModel model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateRequestModel = z.lazy(() => {
  return z.object({
    imageOnly: updateRequestModelImageOnly.optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateRequestModel} updateRequestModel
 * @property {UpdateRequestModelImageOnly}
 */
export type UpdateRequestModel = z.infer<typeof updateRequestModel>;

/**
 * Zod schema for mapping API responses to the UpdateRequestModel application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestModelResponse = z.lazy(() => {
  return z
    .object({
      ImageOnly: updateRequestModelImageOnlyResponse.optional().nullable(),
    })
    .transform((data) => ({
      imageOnly: data['ImageOnly'],
    }));
});

/**
 * Zod schema for mapping the UpdateRequestModel application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestModelRequest = z.lazy(() => {
  return z
    .object({
      imageOnly: updateRequestModelImageOnlyRequest.optional().nullable(),
    })
    .transform((data) => ({
      ImageOnly: data['imageOnly'],
    }));
});
