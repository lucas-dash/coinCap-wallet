import { compactNumber } from '@/lib/functions';

export default function MarketsHeader({
  totalMarketCap,
  total24hVolume,
  totalMarkets,
}: Stats) {
  return (
    <section className="">
      <h3 className="font-medium text-lg">
        Today&apos;s Cryptocurrency Prices
      </h3>
      <p className="text-sm sm:text-base">
        The global crypto market cap is {compactNumber(totalMarketCap)}
      </p>

      <section className="my-7 border border-red-400 flex gap-4 w-full">
        <article className="min-h-[200px] min-w-[280px] rounded-xl bg-foreground dark:bg-foreground-dark">
          <div>
            <h4>Crypto market volume over the last 24 hours</h4>
            <p className="font-semibold">{compactNumber(total24hVolume)}</p>
          </div>
        </article>
      </section>
    </section>
  );
}
