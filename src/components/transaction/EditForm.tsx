'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Calendar } from '@/components/ui/calendar';
import { format, parse } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '../Icons';
import { transactionSchema } from '@/lib/validations/transactionSchema';
import { useState } from 'react';
import { DialogFooter } from '../ui/dialog';
import Image from 'next/image';
import { updateTransaction } from '@/firebase/db';

export default function EditForm({
  id,
  coinDetail,
  amount,
  name,
  date,
  fee,
  note,
  type,
  pricePerCoin,
}: Transaction) {
  const [saving, setSaving] = useState<boolean>(false);
  const [typeTransaction, setTypeTransaction] = useState<
    'Deposit' | 'Withdraw'
  >(type);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof transactionSchema>>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      coin: name || '',
      note: note || '',
      amount: amount.toString() || '',
      pricePerCoin: pricePerCoin.toString() || '',
      fee: fee.toString() || '',
      date: parse(date, 'd/M/yyyy', new Date()),
    },
  });

  async function submitEditedTransaction(
    data: z.infer<typeof transactionSchema>
  ) {
    setSaving(true);

    const updatedTransaction: Transaction = {
      id: id,
      name: name,
      coinDetail,
      amount: Number(data.amount),
      pricePerCoin: Number(data.pricePerCoin),
      date: format(data.date, 'dd/MM/yyy'),
      fee: Number(data.fee),
      note: data.note,
      type: typeTransaction,
    };

    const { error } = await updateTransaction(id, updatedTransaction);

    if (error) {
      toast({
        title: 'Failed to save transaction.',
        variant: 'destructive',
      });
    }

    toast({
      title: 'Transaction saved.',
      variant: 'success',
    });

    setSaving(false);
    form.reset();
  }

  const imageUrl = coinDetail.image.includes('?') ? (
    <Icons.coins size={25} />
  ) : (
    <Image src={coinDetail.image} alt={name} width={25} height={25} />
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitEditedTransaction)}
        className="w-full space-y-3 "
      >
        <div className="bg-slate-200 dark:bg-slate-800 w-[200px] rounded-xl mx-auto flex items-center justify-around my-4 p-1.5 ">
          <Button
            type="button"
            size={'sm'}
            variant={typeTransaction === 'Deposit' ? 'secondary' : 'ghost'}
            className="h-6"
            onClick={() => setTypeTransaction('Deposit')}
          >
            Deposit
          </Button>
          <span>|</span>
          <Button
            type="button"
            size={'sm'}
            variant={typeTransaction === 'Deposit' ? 'ghost' : 'secondary'}
            className="h-6"
            onClick={() => setTypeTransaction('Withdraw')}
          >
            Withraw
          </Button>
        </div>

        <FormField
          control={form.control}
          name="coin"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormControl>
                <div className="inline-flex items-center gap-2">
                  {imageUrl}
                  <h3 className="font-medium text-lg">{name}</h3>
                </div>
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel className="text-typography-detail dark:text-typography-dark text-center">
                {coinDetail.symbol}
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  aria-describedby="edit your coin value"
                  className="w-min border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-foreground-dark text-lg text-center font-medium my-5 "
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pricePerCoin"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel className="inline-flex items-center">
                <Icons.money className="h-4 w-4" />
                Price Per Coin
              </FormLabel>
              <FormControl>
                <Input
                  className="border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-foreground-dark w-max min-w-[200px]"
                  placeholder="$29300,20"
                  type="number"
                  aria-describedby="edit price for one coin"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel className="inline-flex items-center">
                <Icons.date className="h-4 w-4 mr-1" />
                Date of buy
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      aria-describedby="edit date when you buy a coin"
                      className={cn(
                        'w-max min-w-[200px] pl-3 text-left font-normal border-slate-300 dark:border-slate-900 rounded-xl bg-transparent hover:bg-transparent hover:text-typography dark:hover:bg-transparent dark:bg-foreground-dark',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd/MM/yyyy')
                      ) : (
                        <span>Select</span>
                      )}
                      <Icons.date className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <FormField
            control={form.control}
            name="fee"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel className="inline-flex items-center">
                  <Icons.money className="h-4 w-4" /> Fee
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-foreground-dark w-max min-w-[200px] "
                    placeholder="$0,020"
                    type="number"
                    aria-describedby="edit price for fee"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel className="inline-flex items-center">
                  <Icons.note className="h-4 w-4 mr-1" /> Note
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-slate-300 dark:border-slate-900 rounded-xl bg-transparent  dark:bg-foreground-dark w-max min-w-[200px]"
                    type="text"
                    placeholder="add notes"
                    maxLength={20}
                    aria-describedby="you can describe your transaction"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <DialogPrimitive.Close asChild>
            <Button type="button" variant={'ghost'} className="rounded-xl">
              Cancel
            </Button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Close asChild>
            <Button
              type="submit"
              variant={'accent'}
              disabled={saving}
              aria-disabled={saving}
              aria-describedby="save your edited transaction"
              className="mt-2 sm:mt-0"
            >
              {saving ? (
                <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.save className="mr-2 h-5 w-5" />
              )}
              Save changes
            </Button>
          </DialogPrimitive.Close>
        </DialogFooter>
      </form>
    </Form>
  );
}
