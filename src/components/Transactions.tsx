import { Suspense } from 'react';
import TransactionList from './transaction/TransactionList';
import LoadBall from './ui/LoadBall';

export default function Transactions() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/50 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 rounded-xl py-2 sm:py-4 min-h-[200px] overflow-hidden">
      <h5 className="font-medium text-lg ml-2 sm:ml-4">Last Transactions</h5>
      <Suspense fallback={<LoadBall />}>
        <TransactionList />
      </Suspense>
    </section>
  );
}
