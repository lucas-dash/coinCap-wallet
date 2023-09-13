'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { Icons } from '../ui/Icons';
import Link from 'next/link';
import Image from 'next/image';
import { currencyFormat } from '@/lib/functions';
import WatchlistButton from '../ui/WatchlistButton';

export const columnsWatchlist: ColumnDef<WatchlistData>[] = [
  {
    accessorKey: 'actions',
    cell: ({ row }) => {
      const coin = row.original;
      const {
        name,
        iconUrl,
        symbol,
        price,
        change,
        uuid,
        rank,
        marketCap,
        volume24,
      } = coin;

      const watchlistData: WatchlistData = {
        uuid,
        name,
        price,
        symbol,
        change,
        iconUrl,
        rank,
        volume24,
        marketCap,
      };

      return <WatchlistButton uuid={uuid} watchlistData={watchlistData} />;
    },
  },
  {
    accessorKey: 'rank',
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant={'ghost'}
            size={'sm'}
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <Icons.sorting size={16} className="mr-2" />#
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <p className="text-center font-medium">{row.getValue('rank')}</p>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const coin = row.original;

      const imageUrl = coin.iconUrl.includes('?') ? (
        <Icons.coins size={25} />
      ) : (
        <Image src={coin.iconUrl} alt={coin.name} width={25} height={25} />
      );

      return (
        <div className="flex gap-2 items-center">
          {imageUrl}
          <Link
            href={`markets/${coin.uuid}`}
            className="flex items-center gap-1 hover:underline-offset-2 hover:underline"
          >
            <p>{row.getValue('name')}</p>
            <p className="text-sm text-typography-detail dark:text-typography-detail-dark">
              {coin.symbol}
            </p>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const marketCap = parseFloat(row.getValue('price'));
      const formatted = currencyFormat(marketCap);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'change',
    header: '24h%',
    cell: ({ row }) => {
      const change = parseFloat(row.getValue('change'))
        .toString()
        .includes('-');
      const changeIcon = change ? <Icons.trendDown /> : <Icons.trendUp />;

      return (
        <div
          className={`flex items-center gap-1 ${
            change ? 'text-downchange' : 'text-upchange'
          }`}
        >
          {changeIcon}
          {row.getValue('change')}%
        </div>
      );
    },
  },
  {
    accessorKey: 'marketCap',
    header: 'Market Cap',
    cell: ({ row }) => {
      const marketCap = parseFloat(row.getValue('marketCap'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(marketCap);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'volume24',
    header: 'Volume(24h)',
    cell: ({ row }) => {
      const volume = parseFloat(row.getValue('volume24'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(volume);

      return <div>{formatted}</div>;
    },
  },
];
