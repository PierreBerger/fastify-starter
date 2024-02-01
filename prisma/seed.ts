import type { Prisma } from '@prisma/client'
import { cleanupDb } from '../test/utils/db.util'
import prisma from '../src/libs/prisma'

const users: Prisma.UserCreateInput[] = [
  {
    name: 'Pierre',
    email: 'pierre@example.com',
    posts: {
      create: [
        {
          title: 'First Post',
          content: 'This is an example post generated from `prisma/seed.ts`',
        },
      ],
    },
  },
  {
    name: 'John',
    email: 'john@example.io',
    posts: {
      create: [
        {
          title: 'Second Post',
          content:
            'This is an other example post generated from `prisma/seed.ts`',
        },
      ],
    },
  },
]

async function seed() {
  console.log('🌱 Seeding...')
  console.time(`🌱 Database has been seeded`)

  console.time('🧹 Cleaned up the database...')
  await cleanupDb(prisma)
  console.timeEnd('🧹 Cleaned up the database...')

  console.time(`👤 Created ${users.length} users...`)
  for (const user of users) {
    await prisma.user.create({
      data: user,
    })
  }
  console.timeEnd(`👤 Created ${users.length} users...`)

  console.timeEnd(`🌱 Database has been seeded`)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
