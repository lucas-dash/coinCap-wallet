import { z } from 'zod';

export const depositSchema = z.object({
  coin: z.string(),
  coinValue: z.number(),
  pricePerCoin: z.number(),
  date: z.string(),
  fee: z.number(),
  note: z.string().max(20),
});
