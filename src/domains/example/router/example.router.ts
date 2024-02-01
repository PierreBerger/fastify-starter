import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { exampleHandler } from '../handler/example.handler'

const example: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify
    .withTypeProvider<ZodTypeProvider>()
    .get(
      '/example',
      { schema: { response: { 200: z.string() } } },
      exampleHandler,
    )
}

export default example
