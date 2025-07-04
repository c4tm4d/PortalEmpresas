import { useValidatedBody, z } from 'h3-zod'
import { eq } from 'drizzle-orm'
import { verify } from '../../utils/password'
import { useDrizzle, tables } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  try {
    // Validate request body
    const { email, password } = await useValidatedBody(event, z.object({
      email: z.string().email(),
      password: z.string().min(6)
    }))

    console.log('Login attempt for:', email) // Debug log
    console.log('Password length:', password.length) // Debug log

    // Test database connection
    let db
    try {
      db = useDrizzle()
      console.log('Database connection successful') // Debug log
    } catch (dbError) {
      console.error('Database connection failed:', dbError) // Debug log
      throw createError({
        statusCode: 500,
        message: 'Database connection error'
      })
    }

    // Find user by email
    const user = await db
      .select()
      .from(tables.users)
      .where(eq(tables.users.email, email))
      .get()

    if (!user) {
      console.log('User not found:', email) // Debug log
      throw createError({
        statusCode: 401,
        message: 'Invalid email or password'
      })
    }

    console.log('User found, stored password length:', user.password.length) // Debug log

    // Check if password field is empty or null
    if (!user.password || user.password.trim() === '') {
      console.log('Empty password field for user:', email) // Debug log
      throw createError({
        statusCode: 500,
        message: 'User account has invalid password'
      })
    }

    // Verify password
    const isValid = await verify(password, user.password)
    console.log('Password verification:', isValid) // Debug log

    if (!isValid) {
      console.log('Invalid password for user:', email) // Debug log
      throw createError({
        statusCode: 401,
        message: 'Invalid email or password'
      })
    }

    // Set session
    const sessionData = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        role: user.role
      }
    }
    
    console.log('Setting session with data:', JSON.stringify(sessionData)) // Debug log
    
    try {
      await setUserSession(event, sessionData)
      console.log('Session set successfully') // Debug log
    } catch (sessionError) {
      console.error('Error setting session:', sessionError) // Debug log
      // Try a different approach - set session without user object wrapper
      try {
        console.log('Trying alternative session format...') // Debug log
        await setUserSession(event, {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          role: user.role
        })
        console.log('Alternative session format successful') // Debug log
      } catch (altSessionError) {
        console.error('Alternative session format also failed:', altSessionError) // Debug log
        throw createError({
          statusCode: 500,
          message: 'Failed to create session'
        })
      }
    }

    console.log('Login successful for:', email) // Debug log

    // Return user data
    return {
      authenticated: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar
      }
    }
  }
  catch (error) {
    console.error('Login error:', error) // Debug log
    if (error instanceof Error) {
      console.error('Error stack:', error.stack) // Debug log
    }
    throw error
  }
})
