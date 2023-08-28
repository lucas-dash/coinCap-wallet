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
      const coinAmounts: Record<
        string,
        { amount: number; coin: TransactionCoin; name: string }
      > = {};

      transactionData.forEach((transaction) => {
        const { coinDetail, amount, type, name } = transaction;

        if (!coinAmounts[name]) {
          coinAmounts[name] = { amount: 0, coin: coinDetail, name: name };
        }

        if (type === 'Withdraw') {
          coinAmounts[name].amount -= amount;
        } else {
          coinAmounts[name].amount += amount;
        }
      });

      const coinAmountsArray = Object.values(coinAmounts).map(
        ({ coin, amount, name }) => ({
          coin,
          amount: amount,
          name,
        })
      );

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
          name: coinAmount.name,
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
