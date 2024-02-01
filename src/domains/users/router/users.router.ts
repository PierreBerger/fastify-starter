import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  createUserResponseSchema,
  createUserSchema,
  findAllUsersSchema,
} from '../schemas/users.schema'
import {
  createUserHandler,
  findAllUsersHandler,
} from '../handler/users.handler'

const users: FastifyPluginAsync = async (fastify, _opts) => {
  fastify
    .withTypeProvider<ZodTypeProvider>()
    .get(
      '/users',
      { schema: { response: { 200: findAllUsersSchema } } },
      findAllUsersHandler,
    )

  fastify.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        body: createUserSchema,
        response: {
          201: createUserResponseSchema,
        },
      },
    },
    createUserHandler,
  )
}

export default users
