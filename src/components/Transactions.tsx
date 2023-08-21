'use client';

import useDatabase from '@/hooks/useDatabase';
import Image from 'next/image';
import { useToast } from './ui/use-toast';

export default function Transactions() {
  const { data, loading, error } = useDatabase();
  const { toast } = useToast();

  if (error) {
    toast({
      title: `${error}`,
    });
  }

  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/50 shadow-base shadow-shadow/60 dark:shadow-shadow-dark/60 rounded-xl p-2 sm:p-4 min-h-[200px]">
      <h5 className="font-medium text-lg">Last Transactions</h5>

      <article className="flex items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : data?.wallet.transactions.length === 0 ||
          data?.wallet.transactions === undefined ? (
          <div className="flex items-center justify-center flex-col my-3">
            <div className="dark:bg-background rounded-xl py-3 px-2">
              <Image
                src={'/noTransaction.svg'}
                alt="Empty State."
                width={180}
                height={180}
              />
            </div>
            <h4 className="text-lg font-semibold">No Transaction</h4>
            <p className="text-typography-detail dark:text-typography-detail-dark text-center">
              You haven&apos;t completed any transactions yet.
            </p>
          </div>
        ) : (
          'data table'
        )}
      </article>
    </section>
  );
}
