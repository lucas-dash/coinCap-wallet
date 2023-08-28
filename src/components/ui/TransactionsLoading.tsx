import { Skeleton } from './skeleton';

export default function TransactionsLoading() {
  return (
    <div className="flex flex-col gap-5 p-2 sm:p-4">
      <Skeleton className="rounded-md h-8 w-full bg-slate-300 dark:bg-slate-600" />
      <Skeleton className="rounded-md h-8 w-full bg-slate-300 dark:bg-slate-600" />
      <Skeleton className="rounded-md h-8 w-full bg-slate-300 dark:bg-slate-600" />
      <Skeleton className="rounded-md h-8 w-full bg-slate-300 dark:bg-slate-600" />
    </div>
  );
}
