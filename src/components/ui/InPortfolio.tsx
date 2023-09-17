'use client';

import useDatabase from '@/hooks/useDatabase';
import { Button } from './button';
import Link from 'next/link';
import { Icons } from './Icons';
import { currencyFormat, getHoldingAssets } from '@/lib/functions';
import { useMemo } from 'react';
import { Skeleton } from './skeleton';

type InPortfolioProps = {
  name: string;
  price: string;
};

export default function InPortfolio({ name, price }: InPortfolioProps) {
  const { userData, loading, error } = useDatabase();

  const transactions = userData?.wallet.transactions;

  const coinData = useMemo(() => {
    if (transactions) {
      const allHolding = getHoldingAssets(transactions);
      return allHolding.find((coin) => coin.coinName === name)?.hodling;
    }
  }, [transactions, name]);

  return (
    <div className="rounded-lg bg-background-dark dark:bg-background w-full  flex flex-col px-2 py-1.5 text-typography-dark dark:text-typography mb-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-typography-detail-dark dark:text-typography-detail">
          In My Portfolio
        </p>
        <Button
          size={'icon'}
          variant={'ghost'}
          className="rounded-full w-7 h-7"
          asChild
        >
          <Link href={`/portfolio/?newTransaction=true`}>
            <Icons.add />
          </Link>
        </Button>
      </div>
      {loading ? (
        <Skeleton className="w-full h-4 dark:bg-slate-300 bg-slate-600 my-2" />
      ) : coinData ? (
        <h6 className="font-medium text-lg">
          {currencyFormat(coinData * Number(price))}
        </h6>
      ) : (
        <h6>{error ? 'Something went wrong' : '$0'}</h6>
      )}
    </div>
  );
}
