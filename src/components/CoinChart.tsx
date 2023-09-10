import { generateTimestamps } from '@/lib/functions';
import AreaGraph from './ui/AreaGraph';
import { useMemo } from 'react';

export default function CoinChart({ sparkline }: CoinId) {
  const coinChartData = useMemo(() => {
    return sparkline.map((price, index) => {
      return {
        hour: generateTimestamps()[index],
        value: Number(price).toFixed(2),
      };
    });
  }, [sparkline]);

  return (
    <section className="bg-primary/70 dark:bg-primary-dark/70 rounded-xl shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 w-full h-max lg:row-span-2 p-1 overflow-hidden">
      <AreaGraph data={coinChartData} />
    </section>
  );
}
