import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

const example: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify
    .withTypeProvider<ZodTypeProvider>()
    .get(
      '/',
      { schema: { response: { 200: z.string() } } },
      async (_request, _reply) => {
        return 'this is an example'
      },
    )
}

export default example
