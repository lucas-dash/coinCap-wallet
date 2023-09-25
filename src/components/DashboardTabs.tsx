'use client';

import useDatabase from '@/hooks/useDatabase';
import { useToast } from './ui/use-toast';
import PortfolioLoad from './ui/PortfolioLoad';
import Overview from './Overview';
import { useMemo } from 'react';
import { totalHolding } from '@/lib/functions';
import Holding from './Holding';
import WatchlistTable from './WatchlistTable';
import { Button } from './ui/button';
import Link from 'next/link';
import Widget from './Widget';

type DashboardTabsProps = {
  coinsData: Coin[];
};

export default function DashboardTabs({ coinsData }: DashboardTabsProps) {
  const { userData, loading, error } = useDatabase();
  const { toast } = useToast();

  if (error) {
    toast({
      title: 'Something went wrong',
      description: `${error}`,
      variant: 'destructive',
    });
  }

  const transactions = userData?.wallet.transactions;

  const realTimeData = useMemo(() => {
    if (transactions && coinsData) {
      return totalHolding(coinsData, transactions);
    }
  }, [coinsData, transactions])!;

  return (
    <section className="grid gap-5 2xl:container mt-2">
      {loading ? (
        <PortfolioLoad />
      ) : (
        <>
          <div>
            <h2 className="font-medium text-lg">Welcome 👋🏻</h2>
          </div>
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-[minmax(200px,1fr)_240px]">
            <Overview realTimeData={realTimeData} />
            <Widget realTimeData={realTimeData} />
          </div>
          <div className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 overflow-hidden">
            <Button
              asChild
              size={'sm'}
              variant={'link'}
              className="font-semibold text-lg"
            >
              <Link href={'/watchlist'}>Watchlist</Link>
            </Button>
            <WatchlistTable />
          </div>
          <Holding realTimeData={realTimeData} />
        </>
      )}
    </section>
  );
}
