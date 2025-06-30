import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})

export const usersRelations = relations(users, ({ many }) => ({
  businesses: many(businesses)
}))

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
  icon: text('icon')
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  businesses: many(businesses)
}))

export const businesses = sqliteTable('businesses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  logo: text('logo'),

  // Location
  address: text('address').notNull(),
  district: text('district').notNull(),
  city: text('city').notNull(),
  zipCode: text('zip_code').notNull(),
  latitude: real('latitude'),
  longitude: real('longitude'),

  // Contacts
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  website: text('website'),

  // Socials
  facebook: text('facebook'),
  foursquare: text('foursquare'),
  twitter: text('twitter'),
  instagram: text('instagram'),
  linkedin: text('linkedin'),

  // Foreign Keys
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  categoryId: integer('category_id')
    .notNull()
    .references(() => categories.id),

  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

export const businessesRelations = relations(businesses, ({ one, many }) => ({
  user: one(users, {
    fields: [businesses.userId],
    references: [users.id]
  }),
  category: one(categories, {
    fields: [businesses.categoryId],
    references: [categories.id]
  }),
  photos: many(businessPhotos)
}))

export const businessPhotos = sqliteTable('business_photos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  url: text('url').notNull(),
  isPrimary: integer('is_primary', { mode: 'boolean' }).default(false),
  businessId: integer('business_id')
    .notNull()
    .references(() => businesses.id, { onDelete: 'cascade' })
})

export const businessPhotosRelations = relations(businessPhotos, ({ one }) => ({
  business: one(businesses, {
    fields: [businessPhotos.businessId],
    references: [businesses.id]
  })
}))
