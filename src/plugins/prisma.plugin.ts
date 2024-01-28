import { PrismaClient } from '@prisma/client'
import type { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

export default fp<FastifyPluginAsync>(async (fastify, _opts) => {
  const prisma = new PrismaClient()

  await prisma.$connect()

  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async fastify => {
    await fastify.prisma.$disconnect()
  })
})
