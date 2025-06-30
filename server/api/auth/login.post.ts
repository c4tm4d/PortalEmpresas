import { useValidatedBody, z } from 'h3-zod'
import { eq } from 'drizzle-orm'
import { verify } from '../../utils/password'

export default defineEventHandler(async (event) => {
  try {
    // Validate request body
    const { email, password } = await useValidatedBody(event, z.object({
      email: z.string().email(),
      password: z.string().min(6)
    }))

    console.log('Login attempt for:', email) // Debug log

    // Find user by email
    const user = await useDrizzle()
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
    await setUserSession(event, {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar
      }
    })

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
    throw error
  }
})
