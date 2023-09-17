import { compactNumber } from '@/lib/functions';

export default function MarketsHeader({
  total24hVolume,
  totalMarketCap,
  totalExchanges,
}: Stats) {
  return (
    <article className="flex flex-col gap-5 items-center sm:items-start lg:items-center lg:flex-row justify-center lg:justify-between mb-4 bg-primary/50  dark:bg-primary-dark/50 rounded-xl p-2">
      <div>
        <h3 className="font-medium text-lg">
          Today&apos;s Cryptocurrency Prices
        </h3>
        <p className="text-sm sm:text-base">
          The global crypto market cap is:
          <span className="font-semibold pl-1">
            {compactNumber(totalMarketCap)}
          </span>
        </p>
      </div>

      <div>
        <h4 className="md:text-lg font-medium text-center">
          Crypto market stats over the last 24 hours
        </h4>

        <div className="flex gap-2">
          <p className="text-sm sm:text-base text-center">
            Total 24h Volume:
            <span className="font-semibold pl-1">
              {compactNumber(total24hVolume)}
            </span>
          </p>
          <p className="text-sm sm:text-base text-center">
            Total Exchanges:
            <span className="font-semibold pl-1">
              {compactNumber(totalExchanges)}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
