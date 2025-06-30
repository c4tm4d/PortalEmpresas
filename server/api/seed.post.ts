import { tables } from '~/server/utils/drizzle'
import { readFileSync } from 'fs'
import { join } from 'path'
import { eq } from 'drizzle-orm'

interface CSVRow {
  post_id: string
  post_title: string
  post_url: string
  address: string
  phone: string
  fax: string
  email: string
  website: string
  contact_text: string
  categories: string
  tags: string
  [key: string]: string
}

export default defineEventHandler(async (event) => {
  try {
    console.log('Starting seed script...')
    
    const db = useDrizzle()
    console.log('Database connection established')
    
    // Test CSV file reading
    const csvPath = join(process.cwd(), 'server', 'api', 'clients2.csv')
    console.log('CSV path:', csvPath)
    
    const csvContent = readFileSync(csvPath, 'utf-8')
    if (!csvContent) {
      throw new Error('CSV file is empty or cannot be read')
    }
    console.log('CSV file read successfully')
    
    // Seed categories
    const categories = [
      { name: 'Alojamento', slug: 'accommodation', icon: 'fi-bed' },
      { name: 'Comida e Bebida', slug: 'food-drink', icon: 'fi-cafe' },
      { name: 'Compras', slug: 'shopping', icon: 'fi-shopping-bag' },
      { name: 'Arte e História', slug: 'art-history', icon: 'fi-museum' },
      { name: 'Entretenimento', slug: 'entertainment', icon: 'fi-entertainment' },
      { name: 'Fitness e Desporto', slug: 'fitness-sport', icon: 'fi-dumbell' },
      { name: 'Vida Noturna', slug: 'night-life', icon: 'fi-disco-ball' },
      { name: 'Medicina', slug: 'medicine', icon: 'fi-meds' },
      { name: 'Beleza', slug: 'beauty', icon: 'fi-makeup' },
      { name: 'Aluguer de Carros', slug: 'car-rental', icon: 'fi-car' },
      { name: 'Serviços', slug: 'services', icon: 'fi-tools' },
      { name: 'Construção', slug: 'construction', icon: 'fi-hammer' },
      { name: 'Transportes', slug: 'transport', icon: 'fi-truck' },
      { name: 'Educação', slug: 'education', icon: 'fi-graduation-cap' },
      { name: 'Agricultura', slug: 'agriculture', icon: 'fi-leaf' },
      { name: 'Indústria', slug: 'industry', icon: 'fi-factory' },
      { name: 'Imobiliário', slug: 'real-estate', icon: 'fi-home' },
      { name: 'Serviços Funerários', slug: 'funeral-services', icon: 'fi-cross' },
      { name: 'Veículos', slug: 'vehicles', icon: 'fi-car' },
      { name: 'Saúde', slug: 'health', icon: 'fi-heartbeat' },
      { name: 'Restaurantes', slug: 'restaurants', icon: 'fi-utensils' },
      { name: 'Comércio', slug: 'commerce', icon: 'fi-store' },
      { name: 'Lazer', slug: 'leisure', icon: 'fi-gamepad' }
    ]

    console.log('Inserting categories...')
    const insertedCategories = await db
      .insert(tables.categories)
      .values(categories)
      .onConflictDoNothing()
      .returning()
    console.log(`Inserted ${insertedCategories.length} categories`)

    // Create a default user for the businesses with ID 1
    console.log('Ensuring default user with ID 1 exists...')
    
    // First, check if user with ID 1 exists
    const existingUser = await db.select().from(tables.users).where(eq(tables.users.id, 1))
    
    let userId = 1
    if (existingUser.length === 0) {
      console.log('No user with ID 1 found, creating one...')
      // Try to insert user with ID 1
      try {
        await db
          .insert(tables.users)
          .values({
            id: 1,
            name: 'System Admin',
            email: 'admin@cityfinder.com',
            password: '$2b$10$dummy.hash.for.seed.data', // This should be properly hashed in production
            avatar: '/img/avatars/01.jpg',
            createdAt: new Date()
          })
        console.log('User with ID 1 created successfully')
      } catch (error) {
        console.log('Could not create user with ID 1, trying to get first available user...')
        const firstUser = await db.select().from(tables.users).limit(1)
        if (firstUser.length === 0) {
          throw new Error('No users found in database and could not create one')
        }
        userId = firstUser[0].id
        console.log(`Using existing user with ID: ${userId}`)
      }
    } else {
      console.log('User with ID 1 already exists')
    }
    
    console.log('Default user id:', userId)

    // Ensure we have categories and get the default category ID
    if (insertedCategories.length === 0) {
      console.log('No categories inserted, getting existing categories...')
      const existingCategories = await db.select().from(tables.categories)
      if (existingCategories.length === 0) {
        throw new Error('No categories found in database')
      }
      insertedCategories.push(...existingCategories)
    }
    const defaultCategoryId = insertedCategories[0].id
    console.log(`Using default category ID: ${defaultCategoryId}`)

    // Parse CSV
    const lines = csvContent.split('\n')
    const headers = lines[0].split(',')
    const businesses = []

    // Process each line (skip header)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue
      const values = parseCSVLine(line)
      if (values.length < headers.length) continue
      const row: CSVRow = {} as CSVRow
      headers.forEach((header, index) => {
        row[header.trim()] = values[index]?.trim() || ''
      })
      const businessData = {
        id: parseInt(row.post_id),
        name: row.post_title || 'Untitled Business',
        description: row.contact_text || 'No description available',
        logo: row.logo_images || null,
        address: row.address || 'No address provided',
        district: 'Unknown', // Default value since not in CSV
        city: 'Unknown', // Will try to extract from address
        zipCode: '0000-000', // Will try to extract from address
        latitude: null,
        longitude: null,
        email: row.email || 'no-email@example.com',
        phone: row.phone || row.fax || 'No phone provided',
        website: row.website || null,
        facebook: null,
        foursquare: null,
        twitter: null,
        instagram: null,
        linkedin: null,
        userId: userId,
        categoryId: defaultCategoryId, // Use default category ID
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Try to extract city and district from address
      const addressParts = businessData.address.split(',')
      if (addressParts.length > 1) {
        const lastPart = addressParts[addressParts.length - 1].trim()
        const zipMatch = lastPart.match(/^\d{4}-\d{3}/)
        if (zipMatch) {
          // Extract zip code
          businessData.zipCode = zipMatch[0]
          // Try to extract city from the part before zip code
          const cityPart = addressParts[addressParts.length - 2]?.trim()
          if (cityPart) {
            businessData.city = cityPart
          }
        }
      }
      businesses.push(businessData)
    }
    console.log('Total businesses to insert:', businesses.length)

    // Validate business data before insertion
    const validBusinesses = businesses.filter(business => {
      if (!business.userId || !business.categoryId) {
        console.log(`Skipping business ${business.name}: missing userId (${business.userId}) or categoryId (${business.categoryId})`)
        return false
      }
      return true
    })
    
    console.log(`Valid businesses to insert: ${validBusinesses.length} out of ${businesses.length}`)
    
    if (validBusinesses.length === 0) {
      throw new Error('No valid businesses to insert after validation')
    }
    
    // Insert businesses in batches
    const batchSize = 1
    let insertedCount = 0
    for (let i = 0; i < validBusinesses.length; i += batchSize) {
      const batch = validBusinesses.slice(i, i + batchSize)
      try {
        const inserted = await db
          .insert(tables.businesses)
          .values(batch)
          .onConflictDoNothing()
          .returning()
        insertedCount += inserted.length
        console.log(`Inserted business ${i + 1}/${validBusinesses.length}: ${batch[0].name}`)
      } catch (batchError) {
        console.error(`Error inserting business ${i + 1}:`, batchError)
        // Continue with next business instead of failing completely
      }
      // Add a small delay between businesses for Cloudflare D1
      await new Promise(res => setTimeout(res, 200))
    }
    return {
      status: 'success',
      message: 'Seed completed successfully',
      data: {
        categoriesInserted: insertedCategories.length,
        businessesInserted: insertedCount,
        totalBusinessesProcessed: businesses.length
      }
    }
  } catch (error) {
    console.error('Error in seed script:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    throw createError({
      statusCode: 500,
      message: `Failed to seed data: ${errorMessage}`
    })
  }
})

// Helper function to parse CSV lines with quoted fields
function parseCSVLine(line: string): string[] {
  const result = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)
  return result
} 