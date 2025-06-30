import { useValidatedBody, z } from 'h3-zod'
import { tables } from '~/server/utils/drizzle'
import { useDrizzle } from '~/server/utils/drizzle'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)

  if (!session.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  console.log('User authenticated:', session.user.id);

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
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      photos: z.array(z.object({
        url: z.string(),
        isPrimary: z.boolean().optional(),
        isLogo: z.boolean().optional()
      })).optional()
    })
  )

  console.log('Validated business data:', {
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
  });

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

  console.log('Category found:', category);

  // Find the logo and separate it from the gallery photos
  const logoPhoto = photos?.find(p => p.isLogo === true);
  const galleryPhotos = photos?.filter(p => p.isLogo !== true);

  console.log('Logo photo found:', logoPhoto);
  console.log('Gallery photos:', galleryPhotos);

  const [newBusiness] = await useDrizzle()
    .insert(tables.businesses)
    .values({
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
      userId: session.user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .returning()

  console.log('Business created:', newBusiness);

  // Save gallery photos if provided
  if (galleryPhotos && galleryPhotos.length > 0) {
    const photoData = galleryPhotos.map((photo, index) => ({
      url: photo.url,
      isPrimary: photo.isPrimary || index === 0,
      businessId: newBusiness.id
    }));

    const savedPhotos = await useDrizzle()
      .insert(tables.businessPhotos)
      .values(photoData)
      .returning();

    console.log('Photos saved:', savedPhotos);
  }

  return {
    status: 'success',
    data: {
      business: newBusiness
    }
  }
}) 