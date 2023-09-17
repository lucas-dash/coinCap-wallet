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
    <section className="bg-foreground/80 dark:bg-slate-900 rounded-xl w-full h-max lg:row-span-2 p-1 overflow-hidden">
      <AreaGraph data={coinChartData} />
    </section>
  );
}
