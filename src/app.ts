import * as path from 'path'
import AutoLoad from '@fastify/autoload'
import { type FastifyPluginAsync } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

const app: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: opts,
  })

  fastify.setValidatorCompiler(validatorCompiler)
  fastify.setSerializerCompiler(serializerCompiler)

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: opts,
  })
}

export default app
