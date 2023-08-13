import UserInfo from '@/components/UserInfo';
import LoadBall from '@/components/ui/LoadBall';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Profile | Coin Wallet',
  description: 'Your information about your account',
};

export default function Profile() {
  return (
    <section className="h-full bg-foreground/70 dark:bg-foreground-dark/80 rounded-xl p-1.5 sm:p-4">
      <h3 className="text-xl font-medium p-2 pb-3 text-center md:text-left">
        Your Profile
      </h3>
      <Suspense fallback={<LoadBall />}>
        <UserInfo />
      </Suspense>
    </section>
  );
}
