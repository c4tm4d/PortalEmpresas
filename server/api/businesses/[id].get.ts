import { tables } from '~/server/utils/drizzle'
import { useDrizzle } from '~/server/utils/drizzle'
import { eq, and } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)

  if (!session.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const businessIdRaw = getRouterParam(event, 'id')
  let businessId = 0
  try {
    businessId = parseInt(businessIdRaw || '0')
  } catch (e) {
    throw createError({
      statusCode: 400,
      message: 'Invalid business ID'
    })
  }
  if (!businessId) {
    throw createError({
      statusCode: 400,
      message: 'Invalid business ID'
    })
  }

  try {
    // Fetch business with category
    const business = await useDrizzle()
      .select({
        id: tables.businesses.id,
        name: tables.businesses.name,
        description: tables.businesses.description,
        logo: tables.businesses.logo,
        address: tables.businesses.address,
        district: tables.businesses.district,
        city: tables.businesses.city,
        zipCode: tables.businesses.zipCode,
        email: tables.businesses.email,
        phone: tables.businesses.phone,
        website: tables.businesses.website,
        facebook: tables.businesses.facebook,
        foursquare: tables.businesses.foursquare,
        twitter: tables.businesses.twitter,
        instagram: tables.businesses.instagram,
        linkedin: tables.businesses.linkedin,
        latitude: tables.businesses.latitude,
        longitude: tables.businesses.longitude,
        categoryId: tables.businesses.categoryId,
        createdAt: tables.businesses.createdAt,
        updatedAt: tables.businesses.updatedAt,
        category: {
          id: tables.categories.id,
          name: tables.categories.name,
          icon: tables.categories.icon,
          slug: tables.categories.slug
        }
      })
      .from(tables.businesses)
      .leftJoin(tables.categories, eq(tables.businesses.categoryId, tables.categories.id))
      .where(and(
        eq(tables.businesses.id, businessId),
        eq(tables.businesses.userId, session.user.id)
      ))
      .get()

    if (!business) {
      return {
        status: 'not_found',
        message: 'Business not found or access denied'
      }
    }

    // Fetch photos for the business
    const photos = await useDrizzle()
      .select()
      .from(tables.businessPhotos)
      .where(eq(tables.businessPhotos.businessId, businessId))
      .all()

    return {
      ...business,
      photos
    }
  } catch (error) {
    console.error('Error fetching business:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch business'
    })
  }
}) 