'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { transactionFormat } from '@/lib/functions';

import { Icons } from '../Icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteTransaction } from '@/firebase/db';

export const columnsTransaction: ColumnDef<Transaction>[] = [
  {
    id: 'actions',
    cell: ({ row }) => {
      const transaction = row.original;

      return (
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
            <DropdownMenuItem
              className="cursor-pointer"
              // onClick={() => openModal(true)}
            >
              <Icons.edit className="h-4 mr-1" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-downchange cursor-pointer"
              onClick={() => deleteTransaction(transaction.id)}
            >
              <Icons.delete className="h-4 mr-1" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: 'coin',
    header: 'Name',
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <div className="flex gap-2 items-center">
          <Link
            href={`markets/${transaction.coin}`}
            className="flex items-center gap-1 hover:underline-offset-2 hover:underline"
          >
            {transaction.coin}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'pricePerCoin',
    header: 'Price Per Coin',
    cell: ({ row }) => {
      return transactionFormat(row.getValue('pricePerCoin'));
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
          <span className="pl-0.5">BTC</span>
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
      return transactionFormat(row.original.fee);
    },
  },
  {
    accessorKey: 'note',
    header: 'Note',
  },
];
