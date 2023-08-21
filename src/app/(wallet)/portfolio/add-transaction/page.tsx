import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function AddTransaction() {
  // fetch coin symbol

  return (
    <section className="h-full bg-foreground/80 backdrop-blur-sm dark:bg-foreground-dark/80 rounded-2xl 2xl:container p-2">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold px-1">New Transaction</h4>
        <Button variant={'ghost'} size={'icon'} asChild>
          <Link href={'/portfolio'}>
            <Icons.close />
          </Link>
        </Button>
      </div>

      <section></section>
    </section>
  );
}
