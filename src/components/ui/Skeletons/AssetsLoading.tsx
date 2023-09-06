import { Skeleton } from '../skeleton';

export default function AssetsLoading() {
  return (
    <div className="bg-foreground/60 dark:bg-foreground-dark/50 p-2 sm:p-3 rounded-xl min-w-[240px] space-y-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between ">
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="rounded-full h-10 w-10 bg-slate-300 dark:bg-slate-600" />
            <Skeleton className="w-20 rounded-lg h-4 bg-slate-300 dark:bg-slate-600" />
          </div>
          <Skeleton className="w-8 h-4 rounded-xl bg-slate-300 dark:bg-slate-600" />
        </div>
        <div className="inline-flex items-center gap-5">
          <Skeleton className="w-full h-4 rounded-lg bg-slate-300 dark:bg-slate-600" />
          <Skeleton className="w-8 h-4 rounded-xl bg-slate-300 dark:bg-slate-600" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between ">
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="rounded-full h-10 w-10 bg-slate-300 dark:bg-slate-600" />
            <Skeleton className="w-20 rounded-lg h-4 bg-slate-300 dark:bg-slate-600" />
          </div>
          <Skeleton className="w-8 h-4 rounded-xl bg-slate-300 dark:bg-slate-600" />
        </div>
        <div className="inline-flex items-center gap-5">
          <Skeleton className="w-full h-4 rounded-lg bg-slate-300 dark:bg-slate-600" />
          <Skeleton className="w-8 h-4 rounded-xl bg-slate-300 dark:bg-slate-600" />
        </div>
      </div>
    </div>
  );
}
