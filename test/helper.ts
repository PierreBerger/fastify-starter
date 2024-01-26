import { beforeAll, afterAll } from 'vitest'
import fp from 'fastify-plugin'

import App from '../src/app'

import Fastify from 'fastify'

const fastify = Fastify()

beforeAll(async () => {
  fastify.register(fp(App))
  await fastify.ready()
})
afterAll(async () => {
  await fastify.close()
})

export default fastify
