import { z } from 'zod'

export const zSignUpSchema = z.object({
  name: z.string().min(1, 'Required'),
  surname: z.string().min(1, 'Required'),
  patronymic: z.string().optional(),
  email: z.string().min(1, 'Required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})
