import type { PrismaClient } from '@prisma/client'
import type { CreateUserSchema } from '../schemas/users.schema'

export const createUser = (prisma: PrismaClient, user: CreateUserSchema) =>
  prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
    },
  })

export const findAllUsers = (prisma: PrismaClient) => prisma.user.findMany()
