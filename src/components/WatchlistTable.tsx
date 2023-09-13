'use client';

import useDatabase from '@/hooks/useDatabase';
import { useToast } from './ui/use-toast';
import EmptyState from './ui/EmptyState';
import { DataTable } from './tableData/DataTable';
import { columnsWatchlist } from './tableData/columnsWatchlist';
import TableSkeleton from './ui/Skeletons/TableSkeleton';

export default function WatchlistTable() {
  const { userData, loading, error } = useDatabase();
  const { toast } = useToast();

  if (error) {
    toast({
      title: 'Something went wrong',
      description: `${error}`,
      variant: 'destructive',
    });
  }

  const watchlist = userData?.watchlist.sort((a, b) => a.rank - b.rank);

  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : watchlist?.length === 0 || watchlist === undefined ? (
        <div className="h-full grid place-items-center">
          <EmptyState
            image="/noFavorites.svg"
            title="No Favorites"
            description="You're not watching any coin yet."
            link="/markets"
            action="See Markets"
            height={160}
            width={160}
          />
        </div>
      ) : (
        <DataTable data={watchlist} columns={columnsWatchlist} />
      )}
    </>
  );
}
