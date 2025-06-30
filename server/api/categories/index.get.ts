import { tables } from '~/server/utils/drizzle'

export default defineEventHandler(async (event) => {
  const categories = await useDrizzle()
    .select()
    .from(tables.categories)
    .all()

  return categories
}) 