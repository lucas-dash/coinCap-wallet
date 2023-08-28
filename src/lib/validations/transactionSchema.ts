import { z } from 'zod';

export const transactionSchema = z.object({
  coin: z.string().nonempty({ message: 'Please select a coin.' }),
  amount: z
    .string()
    .trim()
    .nonempty({ message: 'You must enter a value.' })
    .refine((value) => value !== '0', {
      message: 'Coin value cannot be zero.',
    }),
  pricePerCoin: z.string().nonempty({ message: 'Required Price.' }).trim(),
  date: z.date(),
  fee: z.string().trim(),
  note: z.string().max(20).trim(),
});
