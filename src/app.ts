import * as path from 'path'
import AutoLoad from '@fastify/autoload'
import { type FastifyPluginAsync } from 'fastify'

const app: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: opts,
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: opts,
  })
}

export default app
