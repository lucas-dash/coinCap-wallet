'use client';

import Assets from '@/components/Assets';
import Holding from '@/components/Holding';
import Overview from './Overview';
import Transactions from '@/components/Transactions';
import useDatabase from '@/hooks/useDatabase';
import { useToast } from './ui/use-toast';
import { useMemo } from 'react';
import { totalHolding } from '@/lib/functions';
import PortfolioLoad from './ui/PortfolioLoad';

type PorfolioTabsProps = {
  coinsData: Coin[];
};

export default function PortfolioTabs({ coinsData }: PorfolioTabsProps) {
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
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-[minmax(200px,1fr)_240px]">
            <Overview realTimeData={realTimeData} />
            <Assets realTimeData={realTimeData} transactions={transactions} />
          </div>
          <Holding realTimeData={realTimeData} />
          <Transactions />
        </>
      )}
    </section>
  );
}
