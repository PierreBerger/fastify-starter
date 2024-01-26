import { it, expect } from 'vitest'

import fastify from '../helper'

it('default root route', async () => {
  const res = await fastify.inject({
    url: '/',
  })
  expect(JSON.parse(res.payload)).toHaveProperty('root', true)
})
