'use client';

import useDatabase from '@/hooks/useDatabase';
import { useToast } from '../ui/use-toast';
import { TransactionDataTable } from './TransactionDataTable';
import { columnsTransaction } from './columnsTransaction';
import EmptyState from '../ui/EmptyState';
import TransactionsLoading from '../ui/TransactionsLoading';

export default function TransactionList() {
  const { userData, loading, error } = useDatabase();
  const { toast } = useToast();

  const transactionData = userData?.wallet.transactions;

  if (error) {
    toast({
      title: `${error}`,
    });
  }
  return (
    <section>
      {loading ? (
        <TransactionsLoading />
      ) : transactionData?.length === 0 || transactionData === undefined ? (
        <EmptyState
          image="/noTransaction.svg"
          title="No Transaction"
          description="You haven't completed any transactions yet."
          height={100}
          width={100}
        />
      ) : (
        <TransactionDataTable
          columns={columnsTransaction}
          data={transactionData}
        />
      )}
    </section>
  );
}
