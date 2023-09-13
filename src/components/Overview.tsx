import { Icons } from './ui/Icons';
import { Button } from './ui/button';
import OverviewHeader from './OverviewHeader';
import OverviewCharts from './OverviewCharts';
import { currencyFormat, totalOverview } from '@/lib/functions';
import Link from 'next/link';

type OverviewProps = {
  realTimeData: ReaTimelHoldingType[];
};

export default function Overview({ realTimeData }: OverviewProps) {
  const overview = totalOverview(realTimeData);

  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30">
      <div className="flex items-center justify-center sm:justify-between gap-1.5 min-[390px]:gap-5 flex-wrap pb-5">
        <div className="flex items-center gap-1.5">
          <h4 className="font-semibold text-lg sm:text-xl">Overview</h4>
          <p
            className={`font-semibold ${
              !overview.allTimeProfit.toString().includes('-')
                ? 'text-upchange'
                : 'text-downchange'
            }`}
          >
            {currencyFormat(overview.allTimeProfit)}
          </p>
        </div>

        <Button
          size={'sm'}
          className="rounded-lg content-center shadow-base shadow-secondary-dark/60 dark:shadow-secondary/60"
          asChild
        >
          <Link href={'/portfolio/?newTransaction=true'}>
            <Icons.add className="mr-2" size={20} />
            Add Transaction
          </Link>
        </Button>
      </div>

      <OverviewHeader overview={overview} />

      {realTimeData.length !== 0 && (
        <OverviewCharts realTimeData={realTimeData} />
      )}
    </section>
  );
}
