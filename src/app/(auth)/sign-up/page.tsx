'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { signInWithGoogle, signUp } from '@/firebase/auth';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { Icons } from '@/components/Icons';
import { addUserData } from '@/firebase/db';

const signUpSchema = z
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

export default function SignUp() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function signUpUser(data: z.infer<typeof signUpSchema>) {
    setLoading(true);
    const { result, error } = await signUp(data.email, data.password);

    if (result) {
      await addUserData(result.user.uid, {
        avatar: null,
        watchlist: [],
        wallet: { transactions: [] },
      });

      router.push('/dashboard');
      toast({
        title: `Succesfully sign up as ${result.user.email}`,
        variant: 'success',
      });
      form.reset();
      setLoading(false);
    } else {
      const authError = (error as FirebaseError).code.slice(5);
      toast({
        title: 'Something went wrong!',
        description: `${authError}Check your typos.`,
        variant: 'destructive',
      });
      setLoading(false);
    }
  }

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

  return (
    <section className="sm:order-2 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signUpUser)}
          className="w-72 space-y-3 p-2"
        >
          <h3 className="text-lg font-semibold">Coin Wallet</h3>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm your Password</FormLabel>
                <FormControl>
                  <Input
                    className="border-input-dark border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark"
                    placeholder="Confirm your password..."
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div
            aria-label="sign up with google"
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
                Sign Up with Google
              </p>
            </Button>
          </div>

          <Button
            size={'sm'}
            type="submit"
            className="w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-input-dark dark:border-input-dark hover:border-0 text-typography hover:text-typography-dark dark:text-typography-dark dark:hover:text-typography hover:bg-gradient-to-r from-accent dark:from-accent-dark to-secondary dark:to-secondary-dark"
            disabled={loading}
          >
            {loading && <Icons.loading className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>

          <FormDescription className="text-secondary-foreground dark:text-secondary-foreground-dark">
            Already have an account?{' '}
            <Link
              href={'login'}
              className="text-typography dark:text-typography-dark hover:underline"
            >
              Log In
            </Link>
          </FormDescription>
        </form>
      </Form>
    </section>
  );
}
