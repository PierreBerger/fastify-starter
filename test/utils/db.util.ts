import type { PrismaClient } from '@prisma/client'

export async function cleanupDb(prisma: PrismaClient) {
  const tables = await prisma.$queryRaw<
    { name: string }[]
  >`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_prisma_migrations';`

  await prisma.$transaction([
    // Disable FK constraints to avoid relation conflicts during deletion
    prisma.$executeRawUnsafe(`PRAGMA foreign_keys = OFF`),
    // Delete all rows from each table, preserving table structures
    ...tables.map(({ name }) =>
      prisma.$executeRawUnsafe(`DELETE from "${name}"`),
    ),
    prisma.$executeRawUnsafe(`PRAGMA foreign_keys = ON`),
  ])
}
