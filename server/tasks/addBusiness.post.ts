import { tables } from '~/server/utils/drizzle'

export default defineEventHandler(async (event) => {
  try {
    // Business creation logic will go here
    return {
      status: 'success',
      message: 'Business added successfully'
    }
  } catch (error) {
    console.error('Error adding business:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to add business'
    })
  }
}) 