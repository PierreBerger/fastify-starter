import { z } from 'zod'

const user = {
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email(),
  name: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .nullish(),
}

export const findAllUsersSchema = z.array(z.object({ ...user, id: z.string() }))

export const createUserSchema = z.object(user)
export const createUserResponseSchema = z.object({
  id: z.string(),
  ...user,
})

export type CreateUserSchema = z.infer<typeof createUserSchema>
