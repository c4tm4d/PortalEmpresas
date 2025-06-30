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

  const { businessId, logoUrl } = await useValidatedBody(
    event,
    z.object({
      businessId: z.number(),
      logoUrl: z.string()
    })
  )

  console.log('Updating business logo:', { businessId, logoUrl });

  const [updatedBusiness] = await useDrizzle()
    .update(tables.businesses)
    .set({
      logo: logoUrl,
      updatedAt: new Date()
    })
    .where(eq(tables.businesses.id, businessId))
    .returning()

  console.log('Business updated:', updatedBusiness);

  return {
    status: 'success',
    data: {
      business: updatedBusiness
    }
  }
}) 