import { tables } from '~/server/utils/drizzle'

export default defineEventHandler(async (event) => {
  try {
    const users = await useDrizzle()
      .select()
      .from(tables.users)
      .all()

    const categories = await useDrizzle()
      .select()
      .from(tables.categories)
      .all()

    const businesses = await useDrizzle()
      .select()
      .from(tables.businesses)
      .all()

    return {
      users: users.length,
      categories: categories.length,
      businesses: businesses.length,
      categoriesList: categories
    }
  } catch (error: any) {
    console.error('Database debug error:', error)
    return {
      error: error.message,
      users: 0,
      categories: 0,
      businesses: 0
    }
  }
}) 