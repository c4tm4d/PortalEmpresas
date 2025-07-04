import { useDrizzle, tables } from '~/server/utils/drizzle'
import { eq, and } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)

  if (!session.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const businessId = parseInt(getRouterParam(event, 'id') || '0')
  
  if (!businessId) {
    throw createError({
      statusCode: 400,
      message: 'Invalid business ID'
    })
  }

  // Verify the business belongs to the current user
  const existingBusiness = await useDrizzle()
    .select()
    .from(tables.businesses)
    .where(and(
      eq(tables.businesses.id, businessId),
      eq(tables.businesses.userId, session.user.id)
    ))
    .get()

  if (!existingBusiness) {
    throw createError({
      statusCode: 404,
      message: 'Business not found or access denied'
    })
  }

  try {
    // Delete the business (photos will be deleted automatically due to CASCADE)
    await useDrizzle()
      .delete(tables.businesses)
      .where(eq(tables.businesses.id, businessId))

    return {
      status: 'success',
      message: 'Business deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting business:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete business'
    })
  }
}) 