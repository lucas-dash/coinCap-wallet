import LineChart from './ui/LineChart';

export default function CoinChart({ sparkline, symbol }: CoinId) {
  return (
    <section className="bg-primary dark:bg-primary-dark rounded-xl shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 w-full h-max lg:row-span-2 p-1 lg:min-h-[400px] overflow-hidden">
      <LineChart data={sparkline} coin={symbol} />
    </section>
  );
}
