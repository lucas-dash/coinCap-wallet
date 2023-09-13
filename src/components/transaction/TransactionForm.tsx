'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '../ui/Icons';

import { transactionSchema } from '@/lib/validations/transactionSchema';
import { useAuthContext } from '@/hooks/useAuth';
import { addTransaction } from '@/firebase/db';
import { ScrollArea } from '../ui/scroll-area';

type TransactionFormProps = {
  coins: Coin[];
};

export default function TransactionForm({ coins }: TransactionFormProps) {
  const [saving, setSaving] = useState<boolean>(false);
  const [type, setType] = useState<'Deposit' | 'Withdraw'>('Deposit');
  const router = useRouter();
  const { toast } = useToast();
  const user = useAuthContext();

  const form = useForm<z.infer<typeof transactionSchema>>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      note: '',
      amount: '',
      pricePerCoin: '',
      fee: '',
    },
  });

  const coinToTransaction = (
    allCoins: Coin[],
    formData: z.infer<typeof transactionSchema>
  ) => {
    const findingCoin = allCoins.find((coin) => coin.name === formData.coin)!;

    return {
      url: findingCoin?.uuid,
      symbol: findingCoin?.symbol,
      image: findingCoin?.iconUrl,
    };
  };

  async function submitTransaction(data: z.infer<typeof transactionSchema>) {
    setSaving(true);

    const transactionData: Transaction = {
      id: nanoid(),
      name: data.coin,
      coinDetail: coinToTransaction(coins, data),
      amount: Number(data.amount),
      pricePerCoin: Number(data.pricePerCoin),
      date: format(data.date, 'dd/MM/yyy'),
      fee: Number(data.fee),
      note: data.note,
      type: type,
    };

    const { error } = await addTransaction(transactionData, user!);

    error &&
      toast({
        title: 'Something went wrong',
        description: 'The transaction did not take place',
        variant: 'destructive',
      });

    setSaving(false);

    toast({
      title: `The ${type} Was Successful`,
      variant: 'success',
    });

    router.back();
    form.reset();
  }

  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-800 w-[200px] rounded-xl mx-auto flex items-center justify-around mb-2 p-1.5 ">
        <Button
          size={'sm'}
          variant={type === 'Deposit' ? 'secondary' : 'ghost'}
          className="h-6"
          onClick={() => setType('Deposit')}
        >
          Deposit
        </Button>
        <span>|</span>
        <Button
          size={'sm'}
          variant={type === 'Deposit' ? 'ghost' : 'secondary'}
          className="h-6"
          onClick={() => setType('Withdraw')}
        >
          Withraw
        </Button>
      </div>

      <article className="bg-foreground dark:bg-slate-900 w-full rounded-xl max-w-xl mx-auto mb-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitTransaction)}
            className="w-full space-y-2 py-4 sm:gap-1.5 flex items-center justify-center flex-col"
          >
            <FormField
              control={form.control}
              name="coin"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border border-input dark:border-input-dark rounded-xl bg-transparent dark:bg-background-dark w-max min-w-[200px]">
                        <SelectValue placeholder="Select Coin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent align="center" className="rounded-lg">
                      <ScrollArea className="h-72 w-52 rounded-md">
                        {coins?.map((coin) => {
                          return (
                            <SelectItem
                              key={coin.uuid}
                              value={coin.name}
                              aria-label={coin.name}
                            >
                              {coin.name}
                              <span className="text-typography-detail dark:text-typography-detail-dark ml-1.5">
                                {coin.symbol}
                              </span>
                            </SelectItem>
                          );
                        })}
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center py-4">
                  <FormControl>
                    <Input
                      placeholder="0 BTC"
                      type="number"
                      aria-describedby="add your coin value"
                      className="w-min border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-background-dark text-lg text-center font-medium  "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            <div className="flex flex-row-reverse flex-wrap-reverse gap-3 items-start justify-center w-full">
              <FormField
                control={form.control}
                name="pricePerCoin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-flex items-center">
                      <Icons.money className="h-4 w-4" />
                      Price Per Coin
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-background-dark w-max max-w-[200px]"
                        placeholder="$29300,20"
                        type="number"
                        aria-describedby="set price for one coin"
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
                  <FormItem className="flex flex-col">
                    <FormLabel className="inline-flex items-center">
                      <Icons.date className="h-4 w-4 mr-1" />
                      Date of buy
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            aria-describedby="select date when you buy a coin"
                            className={cn(
                              'w-[200px] min-w-[200px] pl-3 text-left font-normal border-slate-300 dark:border-slate-900 rounded-xl bg-transparent hover:bg-transparent hover:text-typography dark:hover:bg-transparent dark:bg-background-dark',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'dd/MM/yyyy')
                            ) : (
                              <span>Pick a date</span>
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
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap pb-2">
              <FormField
                control={form.control}
                name="fee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-flex items-center">
                      <Icons.money className="h-4 w-4" /> Fee
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-background-dark w-max max-w-[200px]"
                        placeholder="$0,020"
                        type="number"
                        aria-describedby="set price for fee"
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
                  <FormItem>
                    <FormLabel className="inline-flex items-center">
                      <Icons.note className="h-4 w-4 mr-1" /> Note
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-background-dark w-max max-w-[200px]"
                        placeholder="bought from coinbase"
                        type="text"
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

            <Button
              type="submit"
              size={'sm'}
              className="w-max sm:w-full max-w-[310px] rounded-xl bg-transparent dark:bg-transparent border-2 border-input dark:border-input-dark hover:border-0 text-typography hover:text-typography-dark dark:text-typography-dark dark:hover:text-typography hover:bg-gradient-to-r from-secondary-foreground dark:from-accent-dark to-secondary dark:to-secondary-dark"
              disabled={saving}
              aria-describedby="add your transaction"
              aria-disabled={saving}
            >
              {saving ? (
                <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
              ) : type === 'Deposit' ? (
                <Icons.deposit className="mr-2 h-5 w-5" />
              ) : (
                <Icons.withraw className="mr-2 h-5 w-5" />
              )}
              {type === 'Deposit' ? 'Deposit' : 'Withraw'}
            </Button>
          </form>
        </Form>
      </article>
    </>
  );
}
