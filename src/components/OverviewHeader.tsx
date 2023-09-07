import { currencyFormat } from '@/lib/functions';
import { Icons } from './Icons';

type OverviewHeaderProps = {
  overview: TotalOverviewType;
};

export default function OverviewHeader({ overview }: OverviewHeaderProps) {
  return (
    <section className="flex items-center justify-center flex-wrap gap-x-9 gap-y-4 sm:gap-y-6">
      <div className="flex items-center gap-5 shadow-base shadow-shadow/20 dark:shadow-shadow-dark/30 bg-slate-100 dark:bg-foreground-dark p-4 rounded-2xl min-w-[200px]">
        <div className="bg-primary dark:bg-slate-200 shadow-base shadow-slate-300 dark:shadow-slate-800 rounded-lg w-10 h-10 flex items-center justify-center">
          <Icons.money className="dark:text-typography" />
        </div>
        <div>
          <p className="text-xs">Balance</p>
          <h5 className="font-semibold">{currencyFormat(overview.balance)}</h5>
        </div>
      </div>

      <div className="flex items-center gap-5 shadow-base shadow-shadow/20 dark:shadow-shadow-dark/30 bg-slate-100 dark:bg-foreground-dark p-4 rounded-2xl min-w-[200px]">
        <div className="bg-primary dark:bg-slate-200 shadow-base shadow-slate-300 dark:shadow-slate-800 rounded-lg w-10 h-10 flex items-center justify-center">
          <Icons.card className="dark:text-typography" />
        </div>
        <div>
          <p className="text-xs">Total Deposits</p>
          <h5 className="font-semibold">
            {currencyFormat(overview.totalDeposits)}
          </h5>
        </div>
      </div>

      <div className="flex items-center gap-5 shadow-base shadow-shadow/20 dark:shadow-shadow-dark/30 bg-slate-100 dark:bg-foreground-dark p-4 rounded-2xl min-w-[200px]">
        <div className="bg-primary dark:bg-slate-200 shadow-base shadow-slate-300 dark:shadow-slate-800 rounded-lg w-10 h-10 flex items-center justify-center">
          <Icons.trendingUp className="dark:text-typography" />
        </div>
        <div>
          <p className="text-xs">All-Time Profit</p>
          <h5
            className={`font-semibold ${
              !overview.allTimeProfitInPercentage.includes('-')
                ? 'text-upchange'
                : 'text-downchange'
            }`}
          >
            {`${overview.allTimeProfitInPercentage}%`}
          </h5>
        </div>
      </div>
    </section>
  );
}
