import type { PrismaClient } from '@prisma/client'
import type { CreateUserSchema } from '../schemas/user.schema'

export const createUser = (prisma: PrismaClient, user: CreateUserSchema) =>
  prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
    },
  })
