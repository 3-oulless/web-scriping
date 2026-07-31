import { z } from 'zod';

/**
 * Zod schema for the ListByTenantRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listByTenantRequest = z.lazy(() => {
  return z.object({
    tenantId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ListByTenantRequest} listByTenantRequest
 * @property {string}
 */
export type ListByTenantRequest = z.infer<typeof listByTenantRequest>;

/**
 * Zod schema for mapping API responses to the ListByTenantRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listByTenantRequestResponse = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});

/**
 * Zod schema for mapping the ListByTenantRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listByTenantRequestRequest = z.lazy(() => {
  return z
    .object({
      tenantId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      tenantId: data['tenantId'],
    }));
});
