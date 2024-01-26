import { it, expect } from 'vitest'
import fastify from '../helper'

it('example is loaded', async () => {
  const res = await fastify.inject({
    url: '/example',
  })

  expect(res.payload, 'this is an examples')
})
