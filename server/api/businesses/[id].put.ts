import { useValidatedBody, z } from 'h3-zod'
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
    const {
      name,
      description,
      address,
      district,
      city,
      zipCode,
      email,
      phone,
      categoryId,
      website,
      facebook,
      foursquare,
      twitter,
      instagram,
      linkedin,
      latitude,
      longitude,
      photos
    } = await useValidatedBody(
      event,
      z.object({
        name: z.string().min(1, 'Name is required'),
        description: z.string().min(1, 'Description is required'),
        address: z.string().min(1, 'Address is required'),
        district: z.string().min(1, 'District is required'),
        city: z.string().min(1, 'City is required'),
        zipCode: z.string().min(1, 'Zip code is required'),
        email: z.string().email('Invalid email'),
        phone: z.string().min(1, 'Phone is required'),
        categoryId: z.number(),
        website: z.string().url().optional().or(z.literal('')),
        facebook: z.string().optional().or(z.literal('')),
        foursquare: z.string().optional().or(z.literal('')),
        twitter: z.string().optional().or(z.literal('')),
        instagram: z.string().optional().or(z.literal('')),
        linkedin: z.string().optional().or(z.literal('')),
        latitude: z.number().nullable().optional(),
        longitude: z.number().nullable().optional(),
        photos: z.array(z.object({
          url: z.string(),
          isPrimary: z.boolean().optional(),
          isLogo: z.boolean().optional()
        })).optional().default([])
      })
    )

    console.log('Received business data:', {
      name,
      description,
      address,
      district,
      city,
      zipCode,
      email,
      phone,
      categoryId,
      website,
      photos
    })

    // Check if category exists
    const category = await useDrizzle()
      .select()
      .from(tables.categories)
      .where(eq(tables.categories.id, categoryId))
      .get()

    if (!category) {
      throw createError({
        statusCode: 400,
        message: `Category with ID ${categoryId} does not exist`
      })
    }

    // Find the logo and separate it from the gallery photos
    const logoPhoto = photos?.find(p => p.isLogo === true);
    const galleryPhotos = photos?.filter(p => p.isLogo !== true);

    // Update the business
    const [updatedBusiness] = await useDrizzle()
      .update(tables.businesses)
      .set({
        name,
        description,
        logo: logoPhoto?.url || null,
        address,
        district,
        city,
        zipCode,
        email,
        phone,
        categoryId,
        website: website || null,
        facebook: facebook || null,
        foursquare: foursquare || null,
        twitter: twitter || null,
        instagram: instagram || null,
        linkedin: linkedin || null,
        latitude,
        longitude,
        updatedAt: new Date()
      })
      .where(eq(tables.businesses.id, businessId))
      .returning()

    // Delete existing photos
    await useDrizzle()
      .delete(tables.businessPhotos)
      .where(eq(tables.businessPhotos.businessId, businessId))

    // Save new gallery photos if provided
    if (galleryPhotos && galleryPhotos.length > 0) {
      const photoData = galleryPhotos.map((photo, index) => ({
        url: photo.url,
        isPrimary: photo.isPrimary || index === 0,
        businessId: businessId
      }));

      await useDrizzle()
        .insert(tables.businessPhotos)
        .values(photoData)
    }

    return {
      status: 'success',
      data: {
        business: updatedBusiness
      }
    }
  } catch (error: any) {
    console.error('Validation error:', error)
    if (error.data) {
      throw createError({
        statusCode: 400,
        message: 'Validation failed',
        data: error.data
      })
    }
    throw error
  }
}) 