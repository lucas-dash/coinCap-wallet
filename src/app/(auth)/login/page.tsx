'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const logInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must cointain at least 6 character(s)' })
    .max(100),
});

export default function Login() {
  const router = useRouter();

  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function logInUser(data: z.infer<typeof logInSchema>) {
    console.log(data);
  }

  return (
    <section className="sm:order-2 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(logInUser)}
          className="w-72 space-y-3 p-2"
        >
          <h3 className="text-lg font-semibold dark:text-typography-dark text-typography">
            Coin Wallet
          </h3>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    {...field}
                    className="border-input-dark border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="border-input-dark border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark"
                    placeholder="Enter your password..."
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size={'sm'}
            className="w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-input-dark dark:border-input-dark hover:border-0 text-typography hover:text-typography-dark dark:text-typography-dark dark:hover:text-typography hover:bg-gradient-to-r from-accent dark:from-accent-dark to-secondary dark:to-secondary-dark"
          >
            Log In
          </Button>
          <FormDescription className="text-secondary-foreground dark:text-secondary-foreground-dark">
            Don&apos;t have an account?{' '}
            <Link
              href={'sign-up'}
              className="text-typography dark:text-typography-dark hover:underline"
            >
              Sign Up
            </Link>
          </FormDescription>
        </form>
      </Form>
    </section>
  );
}
