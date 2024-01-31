import type { PrismaClient } from '@prisma/client'

export const findAllUsers = (prisma: PrismaClient) => prisma.user.findMany()
