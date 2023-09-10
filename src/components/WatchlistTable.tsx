'use client';

import useDatabase from '@/hooks/useDatabase';
import { useToast } from './ui/use-toast';
import EmptyState from './ui/EmptyState';

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

  const watchlist = userData?.watchlist;

  return (
    <section className="h-full bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30">
      {loading ? (
        <p>Loading...</p>
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
        <h4>Table</h4>
      )}
    </section>
  );
}
