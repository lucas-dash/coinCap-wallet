'use client';

import useDatabase from '@/hooks/useDatabase';
import { useToast } from '../ui/use-toast';
import EmptyState from '../ui/EmptyState';
import Asset from './Asset';
import { useMemo } from 'react';
import AssetsLoading from '../ui/AssetsLoading';

export default function AssetsList() {
  const { userData, loading, error } = useDatabase();
  const { toast } = useToast();

  if (error) {
    toast({
      title: `${error}`,
    });
  }

  const transactionData = userData?.wallet.transactions;

  const totalAssets = useMemo(() => {
    if (transactionData) {
      const coinAmounts: Record<string, number> = {};

      transactionData.forEach((transaction) => {
        const { coin, amount, type } = transaction;

        if (coinAmounts[coin]) {
          if (type === 'Withdraw') {
            coinAmounts[coin] -= amount;
          } else {
            coinAmounts[coin] += amount;
          }
        } else {
          coinAmounts[coin] = amount;
        }
      });

      const coinAmountsArray = Object.entries(coinAmounts).map(
        ([coin, amount]) => ({
          coin,
          amount,
        })
      );

      // Celková hodnota portfolia
      const totalPortfolioValue = coinAmountsArray.reduce(
        (total, coinAmount) => total + coinAmount.amount,
        0
      );

      const coinDataWithPercentage = coinAmountsArray.map((coinAmount) => {
        const percentage = (coinAmount.amount / totalPortfolioValue) * 100;
        return {
          coin: coinAmount.coin,
          amount: coinAmount.amount,
          percentage: Number(percentage.toFixed(2)),
        };
      });

      return coinDataWithPercentage.sort((a, b) => b.percentage - a.percentage);
    }
  }, [transactionData]);

  return (
    <section className="flex flex-col gap-5 mt-2">
      {loading ? (
        <AssetsLoading />
      ) : transactionData?.length === 0 || transactionData === undefined ? (
        <EmptyState
          image="/noAssets.svg"
          title="No Assets"
          description="You don't own any assets yet."
          width={250}
          height={220}
        />
      ) : (
        totalAssets?.map((asset, i) => <Asset key={i} {...asset} />)
      )}
    </section>
  );
}
