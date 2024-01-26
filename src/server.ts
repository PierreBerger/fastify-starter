import Fastify from 'fastify'
import pino from 'pino'
import app from './app'

const port = process.env.PORT ? Number(process.env.PORT) : 3000
const isProduction = process.env.NODE_ENV === 'production'

const server = Fastify({
  logger: !isProduction
    ? pino({
        transport: {
          target: 'pino-pretty',
        },
      })
    : undefined,
})

server.register(app)

server.listen({ port }).catch(async err => {
  server.log.error(err, '🚨')
  await server.close()
  process.exit(1)
})
