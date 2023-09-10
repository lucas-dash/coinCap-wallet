import { DataTable } from './cryptos/DataTable';
import { columns } from './cryptos/columns';

export default function MarketsCoins({ coinData }: { coinData: Coin[] }) {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 rounded-lg w-full">
      <DataTable columns={columns} data={coinData} />
    </section>
  );
}
