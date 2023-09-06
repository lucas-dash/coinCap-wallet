import { Skeleton } from '../skeleton';

export default function OverviewSkeleton() {
  return (
    <div className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 w-full space-y-4">
      <Skeleton className="h-4 w-44 pb-5 bg-slate-300 dark:bg-slate-800 rounded-md" />
      <div className="flex items-center justify-center flex-wrap gap-x-9 gap-y-4 sm:gap-y-6">
        <Skeleton className="min-w-[200px] min-h-[70px] rounded-2xl bg-slate-200 dark:bg-slate-600 flex items-center gap-5 p-4">
          <Skeleton className="rounded-lg bg-slate-300 dark:bg-slate-800 h-10 w-16" />
          <Skeleton className="w-full bg-slate-300 dark:bg-slate-800 h-3 rounded-2xl" />
        </Skeleton>
        <Skeleton className="min-w-[200px] min-h-[70px] rounded-2xl bg-slate-200 dark:bg-slate-600 flex items-center gap-5 p-4">
          <Skeleton className="rounded-lg bg-slate-300 dark:bg-slate-800 h-10 w-16" />
          <Skeleton className="w-full bg-slate-300 dark:bg-slate-800 h-3 rounded-2xl" />
        </Skeleton>
        <Skeleton className="min-w-[200px] min-h-[70px] rounded-2xl bg-slate-200 dark:bg-slate-600 flex items-center gap-5 p-4">
          <Skeleton className="rounded-lg bg-slate-300 dark:bg-slate-800 h-10 w-16" />
          <Skeleton className="w-full bg-slate-300 dark:bg-slate-800 h-3 rounded-2xl" />
        </Skeleton>
      </div>
      <Skeleton className="h-20 w-full bg-slate-300 dark:bg-slate-800 rounded-2xl" />
    </div>
  );
}
