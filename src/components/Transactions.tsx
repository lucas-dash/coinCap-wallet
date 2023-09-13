import TransactionList from './transaction/TransactionList';

export default function Transactions() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/50 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 rounded-xl pt-2 sm:pt-4 min-h-[200px] overflow-hidden">
      <h5 className="font-medium text-lg ml-2 sm:ml-4">Last Transactions</h5>
      <TransactionList />
    </section>
  );
}
