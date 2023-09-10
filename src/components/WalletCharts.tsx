import Chart from './ui/Chart';
import { Icons } from './Icons';
import { Button } from './ui/button';
import { generateTimestamps } from '@/lib/functions';
import Piechart from './ui/Piechart';
import { useMemo, useState } from 'react';

type WalletChartsProps = {
  realTimeData: ReaTimelHoldingType[];
};

export default function WalletCharts({ realTimeData }: WalletChartsProps) {
  const [activeChart, setActiveChart] = useState<'Pie' | 'Line'>('Line');

  const pieChartData = useMemo(() => {
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

    return holdingWithPercentage.map((hodl) => {
      return {
        name: hodl.coinName,
        value: Number(hodl.percentage),
      };
    });
  }, [realTimeData]);

  const sumArray: number[] = new Array(24).fill(0);

  realTimeData.forEach((coin) => {
    coin.realTime.todaySparklineValues.forEach((value, index) => {
      sumArray[index] += value;
    });
  });

  const lineChartData = sumArray.map((price, index) => {
    return {
      hour: generateTimestamps()[index],
      value: price.toFixed(2),
    };
  });

  return (
    <section className="bg-foreground/80 dark:bg-foreground-dark rounded-xl mt-7 pb-1 overflow-hidden w-full">
      <div className="flex items-center justify-between container my-4">
        <h4 className="font-medium text-lg">
          {activeChart === 'Line' ? '24h trend' : 'Allocation'}
        </h4>
        <div className="bg-slate-200 rounded-lg w-max px-1 py-1 flex items-center gap-2">
          <Button
            size={'icon'}
            className="h-6 w-7 dark:hover:bg-secondary-dark"
            variant={activeChart === 'Line' ? 'secondary' : 'ghost'}
            onClick={() => setActiveChart('Line')}
          >
            <Icons.trendingUp size={18} className="text-typography" />
          </Button>
          <Button
            size={'icon'}
            className="h-6 w-7 dark:hover:bg-secondary-dark"
            variant={activeChart === 'Line' ? 'ghost' : 'secondary'}
            onClick={() => setActiveChart('Pie')}
          >
            <Icons.portfolio size={18} className="text-typography" />
          </Button>
        </div>
      </div>
      {activeChart === 'Line' && <Chart data={lineChartData} />}
      {activeChart === 'Pie' && <Piechart data={pieChartData} />}
    </section>
  );
}
