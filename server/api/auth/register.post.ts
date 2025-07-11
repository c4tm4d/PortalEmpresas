import { useValidatedBody, z } from 'h3-zod'
import { eq } from 'drizzle-orm'
import { hash } from '../../utils/password'
import { useDrizzle, tables } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  // Validate request body
  const body = await useValidatedBody(event, z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6)
  }))

  // Check if email already exists
  const existingUser = await useDrizzle()
    .select()
    .from(tables.users)
    .where(eq(tables.users.email, body.email))
    .get()

  if (existingUser) {
    throw createError({
      statusCode: 400,
      message: 'Email already registered'
    })
  }

  // Hash password
  const hashedPassword = await hash(body.password)

  const db = useDrizzle()

  // Create user
  const user = await db
    .insert(tables.users)
    .values({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(body.name)}`,
      createdAt: new Date()
    })
    .returning()
    .get()

  // Set session
  try {
    await setUserSession(event, {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      role: user.role
    })
  } catch (sessionError) {
    console.error('Error setting session during registration:', sessionError)
    // Continue without session - user can log in later
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: user.avatar
  }
})
