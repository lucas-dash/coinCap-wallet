import { Progress } from '../ui/progress';
import CoinImage from '../ui/CoinImage';
import { currencyFormat } from '@/lib/functions';

export default function Asset({
  coinDetail,
  coinName,
  hodling,
  percentage,
}: ReaTimelHoldingType & { percentage: string }) {
  return (
    <article className="flex flex-col overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <CoinImage
            src={coinDetail.image}
            alt={coinName}
            width={30}
            height={30}
          />
          <h6 className="font-semibold">{coinName}</h6>
        </div>
        <p className="font-medium text-right break-words">
          {currencyFormat(hodling)} {coinDetail.symbol}
        </p>
      </div>
      <div className="inline-flex items-center gap-5">
        <Progress
          value={Number(percentage)}
          className="h-2 bg-slate-300 dark:bg-slate-200"
        />
        <p className="font-medium">{`${percentage}%`}</p>
      </div>
    </article>
  );
}
