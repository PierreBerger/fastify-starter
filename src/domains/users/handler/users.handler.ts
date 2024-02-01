import { createUser, findAllUsers } from '../db/users.db'
import prisma from '../../../libs/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import type { CreateUserSchema } from '../schemas/users.schema'

export const findAllUsersHandler = () => findAllUsers(prisma)

export const createUserHandler = async (
  req: FastifyRequest<{ Body: CreateUserSchema }>,
  reply: FastifyReply,
) => {
  const user = await createUser(prisma, req.body)
  reply.code(201).send(user)
}
