'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';
import { Icons } from './Icons';

type MobileNavProps = {
  close: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ close }: MobileNavProps) {
  return (
    <section className="absolute inset-0 z-40 bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-sm min-h-screen sm:hidden p-2 flex flex-col">
      <Button
        variant={'ghost'}
        size={'icon'}
        className="rounded-full"
        onClick={() => close(false)}
      >
        <Icons.close />
      </Button>

      <nav className="w-full flex flex-col items-center gap-7">
        <Button
          asChild
          variant={'outline'}
          className="min-w-[170px] rounded-xl"
        >
          <Link href={'/dashboard'}>
            <Icons.dashboard />
            <p className="font-medium ml-2 text-lg">Dashboard</p>
          </Link>
        </Button>

        <Button
          asChild
          variant={'outline'}
          className="min-w-[170px] rounded-xl"
        >
          <Link href={'/portfolio'}>
            <Icons.portfolio />
            <p className="font-medium text-lg ml-2">Portfolio</p>
          </Link>
        </Button>
      </nav>
    </section>
  );
}
