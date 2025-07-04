export default defineEventHandler(async (event) => {
  try {
    console.log('Getting user session...') // Debug log
    
    let session
    try {
      session = await getUserSession(event)
      console.log('Session data:', JSON.stringify(session)) // Debug log
    } catch (sessionError) {
      console.error('Error getting session:', sessionError) // Debug log
      throw createError({
        statusCode: 401,
        message: 'Session error'
      })
    }

    if (!session) {
      console.log('No session found') // Debug log
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    // Validate session data
    if (!session.id || !session.email) {
      console.log('Invalid session data:', session) // Debug log
      throw createError({
        statusCode: 401,
        message: 'Invalid session data'
      })
    }

    console.log('Returning user data:', JSON.stringify(session)) // Debug log
    return session
  } catch (error) {
    console.error('Error in /api/auth/me:', error) // Debug log
    if (error instanceof Error) {
      console.error('Error stack:', error.stack) // Debug log
    }
    throw error
  }
})
