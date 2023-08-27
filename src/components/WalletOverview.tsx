import { currencyFormat } from '@/lib/functions';
import { Icons } from './Icons';
import { Button } from './ui/button';

export default function WalletOverview() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/60 dark:shadow-shadow-dark/60 w-full">
      <h4 className="font-semibold text-lg sm:text-xl pb-5">Overview</h4>
      <article className="flex items-center justify-center flex-wrap gap-x-9 gap-y-6">
        <div className="flex items-center gap-1.5">
          <div className="bg-primary dark:bg-slate-200 shadow-base shadow-slate-300 dark:shadow-slate-800 rounded-lg w-10 h-10 flex items-center justify-center">
            <Icons.money className="dark:text-typography" />
          </div>
          <div className="">
            <p className="text-xs">Total Assets</p>
            <h5 className="font-semibold">{currencyFormat(102)}</h5>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="bg-primary dark:bg-slate-200 shadow-base shadow-slate-300 dark:shadow-slate-800 rounded-lg w-10 h-10 flex items-center justify-center">
            <Icons.card className="dark:text-typography" />
          </div>
          <div className="">
            <p className="text-xs">Total Deposits</p>
            <h5 className="font-semibold">{currencyFormat(10202)}</h5>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="bg-primary dark:bg-slate-200 shadow-base shadow-slate-300 dark:shadow-slate-800 rounded-lg w-10 h-10 flex items-center justify-center">
            <Icons.trendingUp className="dark:text-typography" />
          </div>
          <div className="">
            <p className="text-xs">Profit</p>
            <h5 className="font-semibold text-upchange">0.66% (24h)</h5>
          </div>
        </div>
      </article>

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
