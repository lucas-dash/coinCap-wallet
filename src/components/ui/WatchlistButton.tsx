'use client';

import { addToWatchlist, deleteFromWatchlist } from '@/firebase/db';
import { Button } from './button';
import { Icons } from './Icons';
import useDatabase from '@/hooks/useDatabase';
import { useToast } from './use-toast';

type WatchlistButtonProps = {
  uuid: string;
  watchlistData: WatchlistData;
  iconSize?: number;
};

export default function WatchlistButton({
  uuid,
  watchlistData,
  iconSize = 20,
}: WatchlistButtonProps) {
  const { userData, loading } = useDatabase();
  const { toast } = useToast();

  const inWatchlist = userData?.watchlist.some((item) => item.uuid === uuid);

  async function watchlistHandler() {
    if (!inWatchlist) {
      await addToWatchlist(watchlistData);

      toast({
        variant: 'success',
        title: 'You have added a coin to watchlist',
      });
    } else {
      await deleteFromWatchlist(uuid);
      toast({
        variant: 'success',
        title: 'You have deleted a coin from watchlist',
      });
    }
  }

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className="rounded-full group"
      onClick={() => watchlistHandler()}
    >
      {loading ? (
        <Icons.loading
          size={20}
          className="dark:text-typography-dark text-typography animate-spin"
        />
      ) : (
        <Icons.watchlist
          size={iconSize}
          className={`dark:text-typography-dark/80 ${
            inWatchlist ? 'fill-red-500' : 'group-hover:text-red-500'
          }`}
        />
      )}
    </Button>
  );
}
