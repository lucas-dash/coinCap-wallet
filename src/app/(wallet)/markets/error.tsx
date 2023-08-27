'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="h-full w-full flex items-center flex-col justify-center gap-6">
      <div className="bg-background/60  rounded-xl p-4">
        <Image
          src="/notFoundState.svg"
          alt="not found state image"
          width={450}
          height={300}
        />
      </div>
      <h2 className="text-2xl font-medium text-center">
        Something went wrong!
      </h2>
      <p className="text-typography-detail dark:text-typography-detail-dark text-center">
        Check your network connection and try again.
      </p>
      <div className="flex gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant={'outline'} asChild>
          <Link href={'/'}>Go Home</Link>
        </Button>
      </div>
    </section>
  );
}
