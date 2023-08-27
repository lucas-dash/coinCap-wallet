import { Skeleton } from './skeleton';

export default function AssetsLoading() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="rounded-lg h-4 w-full bg-slate-300" />
      <Skeleton className="rounded-lg h-4 w-full bg-slate-300" />
      <Skeleton className="rounded-lg h-4 w-full bg-slate-300" />
      <Skeleton className="rounded-lg h-4 w-full bg-slate-300" />
    </div>
  );
}
