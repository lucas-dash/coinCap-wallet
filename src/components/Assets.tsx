import Image from 'next/image';
import { Button } from './ui/Button';
import { Icons } from './Icons';

//? coin image, name, portfolio value

export default function Assets() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/60 dark:shadow-shadow-dark/60 min-w-[240px]">
      <h5 className="font-medium text-lg">Assets</h5>
      <article className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="dark:bg-background rounded-xl py-3 px-2">
            <Image
              src="/noAssets.svg"
              alt="No assets"
              width={280}
              height={220}
            />
          </div>
          <h4 className="text-lg font-semibold">No Assets</h4>
          <p className="text-typography-detail dark:text-typography-detail-dark text-center">
            You don&apos;t own any assets yet.
          </p>
          <Button variant={'accent'} size={'sm'} className="rounded-lg">
            <Icons.add size={20} />
            Add
          </Button>
        </div>
      </article>
    </section>
  );
}
