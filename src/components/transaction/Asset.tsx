import { Progress } from '../ui/progress';

export default function Asset({
  coin,
  amount,
  percentage,
}: {
  coin: string;
  amount: number;
  percentage: number;
}) {
  return (
    <article className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <div className="h-8 w-8 bg-emerald-500 rounded-full"></div>
          <h6 className="font-semibold">{coin}</h6>
        </div>
        <p className="font-medium">{amount}</p>
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
