'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { Icons } from '../ui/Icons';
import { currencyFormat } from '@/lib/functions';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

type HodlProps = {
  realTimeData: ReaTimelHoldingType[];
};

export default function Hodl({ realTimeData }: HodlProps) {
  if (realTimeData.length === 0)
    return (
      <p className="text-typography-detail dark:text-typography-detail-dark font-medium text-center py-3">
        You&apos;re not holding any coins yet.
      </p>
    );

  return (
    <ScrollArea>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Coin</TableHead>
            <TableHead>Price(24h%)</TableHead>
            <TableHead>Holding</TableHead>
            <TableHead>Avg. Buy Price</TableHead>
            <TableHead>Profit/Loss</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {realTimeData?.map((asset, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center">
                  {asset.coinDetail.image.includes('?') ? (
                    <Icons.coins size={30} />
                  ) : (
                    <Image
                      src={asset.coinDetail.image}
                      alt={asset.coinName}
                      width={30}
                      height={30}
                      className="inline-block"
                    />
                  )}
                  <Button variant={'link'} asChild>
                    <Link href={`markets/${asset.coinDetail.url}`}>
                      <p className="font-medium inline-block ">
                        {asset.coinName}
                      </p>
                      <span className="text-sm inline-block ml-2 text-typography-detail dark:text-typography-detail-dark">
                        {asset.coinDetail.symbol}
                      </span>
                    </Link>
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p>{currencyFormat(asset.realTime.coinPrice)}</p>
                  <div
                    className={`flex items-center ${
                      asset.realTime.coinChange.includes('-')
                        ? 'text-downchange'
                        : 'text-upchange'
                    }`}
                  >
                    <p>
                      {asset.realTime.coinChange.includes('-') ? (
                        <Icons.trendDown size={20} />
                      ) : (
                        <Icons.trendUp size={20} />
                      )}
                    </p>
                    <p>{asset.realTime.coinChange}%</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>{currencyFormat(asset.realTime.valueNow)}</p>
                  <p className="text-sm text-typography-detail dark:text-typography-detail-dark">
                    {asset.hodling} <span>{asset.coinDetail.symbol}</span>
                  </p>
                </div>
              </TableCell>
              <TableCell>{currencyFormat(asset.avgBuyPrice)}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p>{currencyFormat(asset.realTime.profit)}</p>
                  <p
                    className={
                      !asset.realTime.profitable
                        ? 'text-downchange'
                        : 'text-upchange'
                    }
                  >
                    {asset.realTime.profitPercentage}%
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
