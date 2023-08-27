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
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { Icons } from '../Icons';

import { transactionSchema } from '@/lib/validations/transactionSchema';
import { useAuthContext } from '@/hooks/useAuth';
import { addTransaction } from '@/firebase/db';

type ActionFormProps = {
  coins: Coin[];
};

export default function ActionForm({ coins }: ActionFormProps) {
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

  async function depositMoney(data: z.infer<typeof transactionSchema>) {
    setSaving(true);

    const depositData: Transaction = {
      id: nanoid(),
      coin: data.coin,
      amount: Number(data.amount),
      pricePerCoin: Number(data.pricePerCoin),
      date: format(data.date, 'dd/MM/yyy'),
      fee: Number(data.fee),
      note: data.note,
      type: 'Deposit',
    };

    const { error } = await addTransaction(depositData, user!);

    if (error) {
      toast({
        title: 'Something went wrong',
        description: 'The transaction did not take place',
        variant: 'destructive',
      });
    }

    setSaving(false);
    toast({
      title: 'The deposit was successful',
      variant: 'success',
    });

    router.push('/portfolio');
    form.reset();
  }

  async function withrawMoney(data: z.infer<typeof transactionSchema>) {
    setSaving(true);

    const withrawData: Transaction = {
      id: nanoid(),
      coin: data.coin,
      amount: Number(data.amount),
      pricePerCoin: Number(data.pricePerCoin),
      date: format(data.date, 'dd/MM/yyy'),
      fee: Number(data.fee),
      note: data.note,
      type: 'Withdraw',
    };

    const { error } = await addTransaction(withrawData, user!);

    if (error) {
      setSaving(false);
      toast({
        title: 'Something went wrong',
        description: 'The transaction did not take place',
        variant: 'destructive',
      });
    }

    setSaving(false);
    toast({
      title: 'The withraw was successful',
      variant: 'success',
    });

    router.push('/portfolio');
    form.reset();
  }

  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-900 w-[200px] rounded-xl mx-auto flex items-center justify-around my-4 p-1.5 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/20">
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

      <article className="bg-slate-200 dark:bg-slate-900 w-full rounded-xl max-w-xl mx-auto shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 mb-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(
              type === 'Deposit' ? depositMoney : withrawMoney
            )}
            className="w-full space-y-3 p-5 flex items-center justify-center flex-col"
          >
            <FormField
              control={form.control}
              name="coin"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-xl border border-input dark:border-input-dark bg-foreground dark:bg-foreground-dark w-max min-w-[200px]">
                        <SelectValue placeholder="Select Coin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem aria-label="bitcoin" value={'Bitcoin'}>
                        Bitcoin BTC
                      </SelectItem>
                      <SelectItem value="ethereum">Ethereum ETH</SelectItem>
                      <SelectItem value="solana">Solana SOL</SelectItem>
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
                <FormItem className="flex flex-col items-center">
                  {/* <FormLabel>Coin Value</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="0 BTC"
                      type="number"
                      aria-describedby="add your coin value"
                      className="w-min border-slate-300 dark:border-slate-900 rounded-xl bg-transparent dark:bg-transparent text-lg text-center font-medium my-5 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-center flex-wrap gap-2 w-full">
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
                        className="border-input border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark w-max min-w-[200px] rounded-xl"
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
                            variant={'ghost'}
                            aria-describedby="select date when you buy a coin"
                            className={cn(
                              'w-max min-w-[200px] pl-3 text-left font-normal border-input border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark rounded-xl',
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

            <div className="flex items-center justify-center gap-3 flex-wrap">
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
                        className="border-input border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark w-max min-w-[200px] rounded-xl"
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
                        className="border-input border-2 dark:border-input-dark bg-foreground dark:bg-foreground-dark w-max min-w-[200px] rounded-xl"
                        placeholder="..."
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
              className="w-full max-w-[310px] rounded-xl bg-transparent dark:bg-transparent border-2 border-input dark:border-input-dark hover:border-0 text-typography hover:text-typography-dark dark:text-typography-dark dark:hover:text-typography hover:bg-gradient-to-r from-secondary-foreground dark:from-accent-dark to-secondary dark:to-secondary-dark"
              disabled={saving}
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
