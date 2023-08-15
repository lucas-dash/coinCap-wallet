'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/Button';
import { Icons } from '../Icons';
import Link from 'next/link';
import Image from 'next/image';

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: 'actions',
    cell: ({ row }) => {
      const coin = row.original;

      return (
        <Button
          variant={'ghost'}
          size={'icon'}
          className="rounded-full group"
          onClick={() => console.log(coin.uuid)}
        >
          <Icons.watchlist className="group-hover:fill-red-500" size={20} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'rank',
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant={'ghost'}
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <Icons.sorting size={20} className="mr-2" />
            <p>#</p>
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
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(marketCap);

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
    accessorKey: '24hVolume',
    header: 'Volume(24h)',
    cell: ({ row }) => {
      const volume = parseFloat(row.getValue('24hVolume'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(volume);

      return <div>{formatted}</div>;
    },
  },
];
