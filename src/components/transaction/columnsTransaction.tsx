'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { currencyFormat } from '@/lib/functions';

import { Icons } from '../ui/Icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { deleteTransaction } from '@/firebase/db';
import Image from 'next/image';
import EditForm from './EditForm';

export const columnsTransaction: ColumnDef<Transaction>[] = [
  {
    id: 'actions',
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Icons.more className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DialogTrigger className="w-full">
                <DropdownMenuItem className="cursor-pointer">
                  <Icons.edit className="h-4 mr-1" />
                  Edit
                </DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem
                className="text-downchange cursor-pointer"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Icons.delete className="h-4 mr-1" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="rounded-xl sm:rounded-xl">
            <DialogHeader>
              <DialogTitle>Edit Trasaction</DialogTitle>
            </DialogHeader>

            <EditForm {...transaction} />
          </DialogContent>
        </Dialog>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const transaction = row.original;

      const imageUrl = transaction.coinDetail.image.includes('?') ? (
        <Icons.coins size={25} />
      ) : (
        <Image
          src={transaction.coinDetail.image}
          alt={transaction.name}
          width={25}
          height={25}
        />
      );

      return (
        <div className="flex gap-2 items-center">
          {imageUrl}

          <Link
            href={`markets/${transaction.coinDetail.url}`}
            className="flex items-center gap-1 hover:underline-offset-2 hover:underline"
          >
            {transaction.name}
            <span className="text-xs text-typography-detail dark:text-typography-detail-dark">
              {transaction.coinDetail.symbol}
            </span>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'pricePerCoin',
    header: 'Price Per Coin',
    cell: ({ row }) => {
      return currencyFormat(row.getValue('pricePerCoin'));
    },
  },
  {
    accessorKey: 'amount',
    header: 'Quantity',
    cell: ({ row }) => {
      const tr = row.original;

      return (
        <div
          className={
            tr.type === 'Deposit' ? 'text-upchange' : 'text-downchange'
          }
        >
          <span>{tr.type === 'Deposit' ? '' : '-'}</span>
          <span className="">{tr.amount}</span>
          <span className="pl-0.5">{tr.coinDetail.symbol}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'fee',
    header: 'Fee',
    cell: ({ row }) => {
      return currencyFormat(row.original.fee);
    },
  },
  {
    accessorKey: 'note',
    header: 'Note',
  },
];
