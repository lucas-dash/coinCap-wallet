import { compactNumber } from '@/lib/functions';
import Link from 'next/link';
import InPortfolio from './ui/InPortfolio';

export default function CoinInfo({
  marketCap,
  symbol,
  supply,
  rank,
  description,
  websiteUrl,
  name,
  price,
}: CoinId) {
  return (
    <section className="w-full mt-2">
      <InPortfolio name={name} price={price} />
      <article className="flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between">
            <h6 className=" text-typography-detail dark:text-typography-detail-dark">
              Market Cap:
            </h6>
            <p className="font-medium">${compactNumber(marketCap)}</p>
          </div>

          <div className="flex items-center justify-between">
            <h6 className=" text-typography-detail dark:text-typography-detail-dark">
              Circulating Supply:
            </h6>
            <p className="font-medium">
              {compactNumber(supply.circulating)} {symbol}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <h6 className=" text-typography-detail dark:text-typography-detail-dark">
              Max Supply:
            </h6>
            {supply.max ? (
              <p className="font-medium">
                {compactNumber(supply.max)} {symbol}
              </p>
            ) : (
              <p className="font-medium">&infin;</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <h6 className="text-typography-detail dark:text-typography-detail-dark">
              Rank:
            </h6>
            <p className="font-medium">#{rank}</p>
          </div>
        </div>

        <div>
          <h6 className="font-medium">Description:</h6>
          <p className="px-0.5">{description}</p>
        </div>

        <div className="flex flex-col items-start justify-between w-full">
          <h6 className="font-medium">Official links</h6>
          <Link
            href={websiteUrl}
            className="bg-foreground-dark dark:bg-foreground font-medium text-typography-dark dark:text-typography rounded-lg py-0.5 px-1 text-sm hover:scale-105 transition-all"
          >
            Website
          </Link>
        </div>
      </article>
    </section>
  );
}
