import { Icons } from './Icons';
import { Button } from './ui/button';
import OverviewHeader from './OverviewHeader';
import { currencyFormat, totalOverview } from '@/lib/functions';
import Link from 'next/link';

type OverviewProps = {
  realTimeData: ReaTimelHoldingType[];
};

export default function WalletOverview({ realTimeData }: OverviewProps) {
  const overview = totalOverview(realTimeData);

  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 w-full">
      <div className="flex items-center justify-center gap-3 flex-wrap pb-5">
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

      <section className="w-full bg-slate-300 dark:bg-slate-400 rounded-lg mt-7">
        <div className="flex items-center justify-between container">
          <div>$29019</div>

          <div className="bg-primary rounded-md w-max px-1 py-1 flex items-center gap-2">
            <Button
              size={'icon'}
              className="h-6 w-7 bg-select dark:hover:bg-foreground"
              variant={'ghost'}
            >
              <Icons.trendingUp size={18} className="text-typography" />
            </Button>
            <Button
              size={'icon'}
              className="h-6 w-7 dark:hover:bg-foreground"
              variant={'ghost'}
            >
              <Icons.portfolio size={18} className="text-typography" />
            </Button>
          </div>
        </div>
        Hello
      </section>
    </section>
  );
}
