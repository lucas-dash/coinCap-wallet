'use client';

import useDatabase from '@/hooks/useDatabase';
import { useToast } from '../ui/use-toast';
import EmptyState from '../ui/EmptyState';
import TableSkeleton from '../ui/Skeletons/TableSkeleton';
import { columnsTransaction } from './columnsTransaction';
import { DataTable } from '../tableData/DataTable';

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
        <TableSkeleton />
      ) : transactionData?.length === 0 || transactionData === undefined ? (
        <EmptyState
          image="/noTransaction.svg"
          title="No Transaction"
          description="You haven't completed any transactions yet."
          className="dark:bg-background/80"
          link="/portfolio/?newTransaction=true"
          action="Add Transaction"
          height={160}
          width={160}
        />
      ) : (
        <DataTable columns={columnsTransaction} data={transactionData} />
      )}
    </section>
  );
}
