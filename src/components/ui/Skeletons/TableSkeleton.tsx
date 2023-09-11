import { Skeleton } from '../skeleton';

export default function TableSkeleton() {
  return (
    <div className="rounded-xl p-2 sm:p-4 bg-foreground/60 dark:bg-foreground-dark/60">
      <Skeleton className="rounded-md w-24 h-4 bg-slate-300 dark:bg-slate-700" />
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center gap-5 pt-4">
          <div className="inline-flex gap-2 items-center">
            <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-full h-12 w-12" />
            <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 min-w-20" />
          </div>
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
        </div>
        <div className="flex items-center gap-5 py-2">
          <div className="inline-flex gap-2 items-center">
            <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-full h-12 w-12" />
            <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 min-w-20" />
          </div>
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
          <Skeleton className="bg-slate-300 dark:bg-slate-600 rounded-lg h-5 w-full" />
        </div>
      </div>
    </div>
  );
}
