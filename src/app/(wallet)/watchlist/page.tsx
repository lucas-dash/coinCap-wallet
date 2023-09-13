import WatchlistTable from '@/components/WatchlistTable';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watchlist | Coin Wallet',
  description: 'Your personal watchlist.',
};

export default function Watchlist() {
  return (
    <section className="h-full bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30">
      <h3 className="font-semibold text-lg sm:text-xl pb-5 pt-2 ml-2 sm:ml-4">
        Watchlist
      </h3>
      <WatchlistTable />
    </section>
  );
}
