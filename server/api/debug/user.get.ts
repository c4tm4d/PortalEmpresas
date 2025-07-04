import { eq } from 'drizzle-orm'
import { useDrizzle, tables } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  try {
    console.log('Testing database connection...')
    
    // Test database connection
    const db = useDrizzle()
    
    // Get all users (without passwords for security)
    const users = await db
      .select({
        id: tables.users.id,
        name: tables.users.name,
        email: tables.users.email,
        avatar: tables.users.avatar,
        role: tables.users.role,
        createdAt: tables.users.createdAt
      })
      .from(tables.users)
      .all()
    
    console.log('Found users:', users.length)
    
    return {
      success: true,
      userCount: users.length,
      users: users.map(user => ({
        ...user,
        passwordLength: '***' // Don't expose actual password length
      }))
    }
  } catch (error) {
    console.error('Debug endpoint error:', error)
    if (error instanceof Error) {
      console.error('Error stack:', error.stack)
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}) 