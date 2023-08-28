import Image from 'next/image';
import { Progress } from '../ui/progress';

export default function Asset({
  coin,
  amount,
  percentage,
  name,
}: {
  coin: TransactionCoin;
  amount: number;
  percentage: number;
  name: string;
}) {
  return (
    <article className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <Image src={coin.image} alt={name} width={30} height={30} />
          <h6 className="font-semibold">{name}</h6>
        </div>
        <p className="font-medium">
          {amount} {coin.symbol}
        </p>
      </div>
      <div className="inline-flex items-center gap-5">
        <Progress
          value={percentage}
          className="h-2 bg-slate-300 dark:bg-slate-200"
        />
        <p className="font-medium">{`${percentage}%`}</p>
      </div>
    </article>
  );
}
