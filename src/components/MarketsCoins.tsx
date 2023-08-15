import { DataTable } from './cryptos/DataTable';
import { columns } from './cryptos/columns';

export default function MarketsCoins({ coinData }: { coinData: Coin[] }) {
  return (
    <section className="bg-foreground/70 dark:bg-foreground-dark/60 shadow-[0_2px_10px_-3px] shadow-shadow/60 dark:shadow-shadow-dark/60 rounded-lg w-full">
      <DataTable columns={columns} data={coinData} />
    </section>
  );
}
