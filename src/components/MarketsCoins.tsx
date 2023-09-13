import { DataTable } from './tableData/DataTable';
import { columns } from './tableData/columns';

export default function MarketsCoins({ coinData }: { coinData: Coin[] }) {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 rounded-lg w-full pt-2 sm:pt-4">
      <h5 className="font-medium text-lg ml-2 sm:ml-4">Coins</h5>
      <DataTable columns={columns} data={coinData} />
    </section>
  );
}
