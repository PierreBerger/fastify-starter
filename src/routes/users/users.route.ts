import type { FastifyPluginAsync } from 'fastify'

const users: FastifyPluginAsync = async (fastify, _opts) => {
  fastify.get('/', async (_request, _reply) => {
    return fastify.prisma.user.findMany()
  })
}

export default users
