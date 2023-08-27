import { Button } from './ui/button';
import { Icons } from './Icons';
import { transactionFormat, compactNumber } from '@/lib/functions';
import Link from 'next/link';

export default function CoinInfo({
  marketCap,
  symbol,
  supply,
  rank,
  description,
  websiteUrl,
}: CoinId) {
  return (
    <section className="w-full lg:max-w-[240px]">
      <div className="rounded-lg bg-background-dark dark:bg-background w-full md:w-[180px] flex flex-col px-2 py-1.5 text-typography-dark dark:text-typography mb-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-typography-detail-dark dark:text-typography-detail">
            In My Portfolio
          </p>
          <Button
            size={'icon'}
            variant={'ghost'}
            className="rounded-full w-7 h-7"
          >
            <Icons.add />
          </Button>
        </div>
        <h6 className="font-medium text-lg">{transactionFormat(180)}</h6>
      </div>

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
