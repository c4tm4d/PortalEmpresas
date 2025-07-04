import { useDrizzle, tables } from '~/server/utils/drizzle'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    // Fetch all businesses with category
    const businesses = await useDrizzle()
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
      .all()

    // Fetch photos for each business
    const businessesWithPhotos = await Promise.all(
      businesses.map(async (business) => {
        const photos = await useDrizzle()
          .select()
          .from(tables.businessPhotos)
          .where(eq(tables.businessPhotos.businessId, business.id))
          .all()

        return {
          ...business,
          photos
        }
      })
    )

    return businessesWithPhotos
  } catch (error) {
    console.error('Error fetching businesses:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch businesses'
    })
  }
}) 