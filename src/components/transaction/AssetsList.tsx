import EmptyState from '../ui/EmptyState';
import Asset from './Asset';
import { useMemo } from 'react';

type AssetsProps = {
  realTimeData: ReaTimelHoldingType[];
  transactions: Transaction[] | undefined;
};

export default function AssetsList({
  realTimeData,
  transactions,
}: AssetsProps) {
  const realTimeDataWithPercentage = useMemo(() => {
    const totalhodling = realTimeData.reduce(
      (total, asset) => total + asset.realTime.valueNow,
      0
    );

    const holdingWithPercentage = realTimeData.map((asset) => ({
      ...asset,
      percentage: Number(
        (asset.realTime.valueNow / totalhodling) * 100
      ).toFixed(2),
    }));

    return holdingWithPercentage;
  }, [realTimeData]);

  return (
    <section className="flex flex-col gap-5 mt-2">
      {transactions?.length === 0 || transactions === undefined ? (
        <EmptyState
          image="/noAssets.svg"
          title="No Assets"
          description="You don't own any assets yet."
          className="dark:bg-background/80"
          width={250}
          height={220}
        />
      ) : (
        realTimeDataWithPercentage?.map((asset, i) => (
          <Asset key={i} {...asset} />
        ))
      )}
    </section>
  );
}
