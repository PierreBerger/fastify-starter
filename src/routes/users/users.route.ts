import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { findAllUsers } from '../../domains/users/db/findAllUsers.db'
import {
  createUserResponseSchema,
  createUserSchema,
  findAllUsersSchema,
} from '../../domains/users/schemas/user.schema'
import { createUser } from '../../domains/users/db/createUser.db'

const users: FastifyPluginAsync = async (fastify, _opts) => {
  fastify
    .withTypeProvider<ZodTypeProvider>()
    .get('/', { schema: { response: { 200: findAllUsersSchema } } }, () => {
      return findAllUsers(fastify.prisma)
    })

  fastify.withTypeProvider<ZodTypeProvider>().post(
    '/',
    {
      schema: {
        body: createUserSchema,
        response: {
          201: createUserResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const user = await createUser(fastify.prisma, request.body)
      reply.code(201).send(user)
    },
  )
}

export default users
