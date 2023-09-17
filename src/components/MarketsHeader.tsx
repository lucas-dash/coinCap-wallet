import { compactNumber } from '@/lib/functions';

export default function MarketsHeader({
  total24hVolume,
  totalMarketCap,
  totalExchanges,
}: Stats) {
  return (
    <>
      <h3 className="font-medium text-lg">
        Today&apos;s Cryptocurrency Prices
      </h3>
      <p className="text-sm sm:text-base">
        The global crypto market cap is {compactNumber(totalMarketCap)}
      </p>

      <section className="my-5 flex overflow-x-scroll gap-4 snap-x snap-mandatory snap-always lg:snap-none lg:overflow-hidden max-w-6xl mx-auto py-2 px-1">
        <article className="min-h-[200px] min-w-[200px] rounded-lg bg-foreground/60  dark:bg-foreground-dark/70 flex-grow-0 flex-shrink-0 basis-full snap-start lg:flex-1 p-1.5">
          <div>
            <h4 className="text-center text-base md:text-lg font-semibold mb-2">
              Crypto market stats over the last 24 hours
            </h4>
            <p className="mb-1">
              Total 24h Volume:{' '}
              <span className="font-semibold">
                {compactNumber(total24hVolume)}
              </span>
            </p>
            <p className="">
              Total Exchanges:{' '}
              <span className="font-semibold">
                {compactNumber(totalExchanges)}
              </span>
            </p>
          </div>
        </article>

        <article className="min-h-[200px] min-w-[200px] rounded-lg bg-foreground/60 dark:bg-foreground-dark/70 flex-grow-0 flex-shrink-0 basis-full snap-start lg:flex-1 p-1.5 ">
          <div>
            <h4>Crypto market volume over the last 24 hours</h4>
            <p className="font-medium">{compactNumber(2090990)}</p>
          </div>
        </article>

        <article className="min-h-[200px] min-w-[200px] rounded-lg bg-foreground/60 dark:bg-foreground-dark/70 flex-grow-0 flex-shrink-0 basis-full snap-start lg:flex-1 p-1.5 ">
          <div>
            <h4>Crypto market volume over the last 24 hours</h4>
            <p className="font-semibold">{compactNumber(2090990)}</p>
          </div>
        </article>
      </section>
    </>
  );
}
