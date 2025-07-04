import { drizzle } from 'drizzle-orm/d1'

import * as schema from '../database/schema'

export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  return drizzle(hubDatabase() as D1Database, { schema })
}

export type User = typeof schema.users.$inferSelect
export type NewUser = typeof schema.users.$inferInsert

export type Category = typeof schema.categories.$inferSelect
export type NewCategory = typeof schema.categories.$inferInsert

export type Business = typeof schema.businesses.$inferSelect
export type NewBusiness = typeof schema.businesses.$inferInsert

export type BusinessPhoto = typeof schema.businessPhotos.$inferSelect
export type NewBusinessPhoto = typeof schema.businessPhotos.$inferInsert

