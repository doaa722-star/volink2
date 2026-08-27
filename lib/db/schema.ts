import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
} from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables ------------------------------------------------------------

// Volunteering opportunities. `userId` is the creator (organization owner).
// Seeded opportunities use userId = 'system'.
export const opportunities = pgTable('opportunities', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  title: text('title').notNull(),
  org: text('org').notNull(),
  category: text('category').notNull(),
  categoryLabel: text('categoryLabel').notNull(),
  location: text('location').notNull(),
  type: text('type').notNull(),
  needed: integer('needed').notNull().default(1),
  volunteers: integer('volunteers').notNull().default(0),
  urgent: boolean('urgent').notNull().default(false),
  description: text('description').notNull(),
  skills: text('skills').notNull().default(''), // comma-separated
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// A volunteer's application to an opportunity.
export const applications = pgTable('applications', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  opportunityId: integer('opportunityId').notNull(),
  status: text('status').notNull().default('pending'), // pending | accepted | rejected
  message: text('message').notNull().default(''),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Saved (bookmarked) opportunities.
export const savedOpportunities = pgTable('saved_opportunities', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  opportunityId: integer('opportunityId').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// In-app notifications.
export const notifications = pgTable('notifications', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  title: text('title').notNull(),
  body: text('body').notNull().default(''),
  type: text('type').notNull().default('info'), // info | application | system
  read: boolean('read').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Extended user profile / settings.
export const profiles = pgTable('profiles', {
  userId: text('userId').primaryKey(),
  bio: text('bio').notNull().default(''),
  phone: text('phone').notNull().default(''),
  city: text('city').notNull().default(''),
  skills: text('skills').notNull().default(''), // comma-separated
  cvUrl: text('cvUrl').notNull().default(''),
  cvName: text('cvName').notNull().default(''),
  emailNotifications: boolean('emailNotifications').notNull().default(true),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
