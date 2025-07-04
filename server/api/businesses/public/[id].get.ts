import { useDrizzle, tables } from '~/server/utils/drizzle'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
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
      .where(eq(tables.businesses.id, businessId))
      .get()

    if (!business) {
      throw createError({
        statusCode: 404,
        message: 'Business not found'
      })
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
  } catch (error: any) {
    console.error('Error fetching business:', error)
    if (error.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch business'
    })
  }
}) 