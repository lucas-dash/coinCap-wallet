import EmptyState from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-8">
      <h1 className="text-3xl md:text-5xl font-bold">Ooop!</h1>
      <h3 className="text-2xl font-semibold">You are Lost!</h3>
      <EmptyState
        image="/notFoundState.svg"
        title="404"
        description="Page not found"
        className="dark:bg-background/80"
        width={250}
        height={220}
      />

      <div className="flex flex-col sm:flex-row gap-5">
        <Button asChild variant={'accent'}>
          <Link href={'/dashboard'}>Dashboard</Link>
        </Button>
        <Button asChild variant={'default'} className="rounded-xl">
          <Link href={'/'}>Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
