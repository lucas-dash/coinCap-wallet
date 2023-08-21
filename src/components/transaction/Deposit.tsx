'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { depositSchema } from '@/lib/validations/transactionSchema';

export default function Deposit() {
  const form = useForm<z.infer<typeof depositSchema>>({
    resolver: zodResolver(depositSchema),
    defaultValues: {
      coin: '',
      note: '',
      coinValue: 0,
      pricePerCoin: 0,
      fee: 0,
      date: '',
    },
  });

  return <article></article>;
}
