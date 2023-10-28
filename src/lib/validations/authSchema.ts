import { z } from 'zod';

export const logInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must cointain at least 6 character(s)' })
    .max(100),
});

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Password must cointain at least 6 character(s)' })
      .max(100),
    confirmPassword: z
      .string()
      .min(6, { message: 'Password do not match' })
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });
