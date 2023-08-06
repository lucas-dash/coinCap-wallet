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
import { logIn, signInWithGoogle } from '@/firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { Icons } from '@/components/Icons';

const logInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must cointain at least 6 character(s)' })
    .max(100),
});

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function signInUserWithGoogle() {
    const { result, error } = await signInWithGoogle();

    if (result) {
      router.push('/dashboard');
      toast({
        title: `Succesfully login as ${
          result.user.displayName ? result.user.displayName : result.user.email
        }`,
      });
    } else {
      const authError = (error as FirebaseError).code.slice(5);
      toast({
        title: 'Something went wrong!',
        description: `${authError} Check your typos.`,
        variant: 'destructive',
      });
    }
  }

  async function logInUser(data: z.infer<typeof logInSchema>) {
    setLoading(true);
    const { result, error } = await logIn(data.email, data.password);

    if (result) {
      router.push('/dashboard');
      toast({
        title: `Succesfully login as ${result.user.email}`,
      });
      form.reset();
      setLoading(false);
    } else {
      let err = '';
      const authError = (error as FirebaseError).code.slice(5);
      if (authError === 'wrong-password') {
        err = 'Wrong password or Email.';
      } else if (authError === 'user-not-found') {
        err = 'User does not exist.';
      } else {
        err = authError;
      }

      toast({
        title: 'Something went wrong!',
        description: `${err} Check your typos.`,
        variant: 'destructive',
      });
      setLoading(false);
    }
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

          <div
            aria-label="log in with google"
            className="w-full flex items-center justify-center group transition-all"
          >
            <Button
              type="button"
              variant={'outline'}
              className="rounded-full w-14 group-hover:w-full transition-all duration-300 ease-in-out"
              onClick={() => signInUserWithGoogle()}
            >
              <Icons.google className="h-6 w-6 group-hover:mr-2" />
              <p className="font-medium text-sm hidden group-hover:inline-block whitespace-nowrap">
                Log In with Google
              </p>
            </Button>
          </div>

          <Button
            type="submit"
            size={'sm'}
            className="w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-input-dark dark:border-input-dark hover:border-0 text-typography hover:text-typography-dark dark:text-typography-dark dark:hover:text-typography hover:bg-gradient-to-r from-accent dark:from-accent-dark to-secondary dark:to-secondary-dark"
            disabled={loading}
          >
            {loading && <Icons.loading className="mr-2 h-4 w-4 animate-spin" />}
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
