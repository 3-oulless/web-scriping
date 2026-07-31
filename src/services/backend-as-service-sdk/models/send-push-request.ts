import { z } from 'zod';
import { Data, data, dataRequest, dataResponse } from './data';
import { Targeting, targeting, targetingRequest, targetingResponse } from './targeting';

/**
 * Zod schema for the SendPushRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sendPushRequest = z.lazy(() => {
  return z.object({
    apiKey: z.string().optional().nullable(),
    serverKey: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    body: z.string().optional().nullable(),
    ttlSeconds: z.number().optional().nullable(),
    priority: z.string().optional().nullable(),
    data: data.optional().nullable(),
    targetType: z.string().optional().nullable(),
    targeting: targeting.optional().nullable(),
    idempotencyKey: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SendPushRequest} sendPushRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {Data}
 * @property {string}
 * @property {Targeting}
 * @property {string}
 */
export type SendPushRequest = z.infer<typeof sendPushRequest>;

/**
 * Zod schema for mapping API responses to the SendPushRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sendPushRequestResponse = z.lazy(() => {
  return z
    .object({
      apiKey: z.string().optional().nullable(),
      serverKey: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      body: z.string().optional().nullable(),
      ttlSeconds: z.number().optional().nullable(),
      priority: z.string().optional().nullable(),
      data: dataResponse.optional().nullable(),
      targetType: z.string().optional().nullable(),
      targeting: targetingResponse.optional().nullable(),
      idempotencyKey: z.string().optional().nullable(),
    })
    .transform((data) => ({
      apiKey: data['apiKey'],
      serverKey: data['serverKey'],
      title: data['title'],
      body: data['body'],
      ttlSeconds: data['ttlSeconds'],
      priority: data['priority'],
      data: data['data'],
      targetType: data['targetType'],
      targeting: data['targeting'],
      idempotencyKey: data['idempotencyKey'],
    }));
});

/**
 * Zod schema for mapping the SendPushRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sendPushRequestRequest = z.lazy(() => {
  return z
    .object({
      apiKey: z.string().optional().nullable(),
      serverKey: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      body: z.string().optional().nullable(),
      ttlSeconds: z.number().optional().nullable(),
      priority: z.string().optional().nullable(),
      data: dataRequest.optional().nullable(),
      targetType: z.string().optional().nullable(),
      targeting: targetingRequest.optional().nullable(),
      idempotencyKey: z.string().optional().nullable(),
    })
    .transform((data) => ({
      apiKey: data['apiKey'],
      serverKey: data['serverKey'],
      title: data['title'],
      body: data['body'],
      ttlSeconds: data['ttlSeconds'],
      priority: data['priority'],
      data: data['data'],
      targetType: data['targetType'],
      targeting: data['targeting'],
      idempotencyKey: data['idempotencyKey'],
    }));
});
