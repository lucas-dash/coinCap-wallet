import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingCoin() {
  return (
    <div className="flex flex-col items-center space-y-2  bg-background/70 dark:bg-background-dark/70 h-full rounded-2xl p-3 md:p-5 shadow-base shadow-shadow/60 dark:shadow-shadow-dark/60">
      <Skeleton className="w-full h-[150px] bg-slate-200 dark:bg-slate-400 rounded-lg" />
      <Skeleton className="h-[180px] w-full bg-slate-200 dark:bg-slate-400 rounded-lg" />
      <Skeleton className="h-[200px] w-full bg-slate-200 dark:bg-slate-400 rounded-lg lg:hidden" />
    </div>
  );
}
