import CoinChart from '@/components/CoinChart';
import CoinHeader from '@/components/CoinHeader';
import CoinInfo from '@/components/CoinInfo';
import { Button } from '@/components/ui/Button';
import { getCoin } from '@/lib/getCoin';
import Link from 'next/link';

type CoinTypeProps = {
  params: {
    coinId: string;
  };
};

export default async function Coin({ params: { coinId } }: CoinTypeProps) {
  const coinResponse: Promise<CoinData> = await getCoin(coinId);
  const coin = await coinResponse;

  return (
    <section className="bg-background/70 dark:bg-background-dark/70 h-full rounded-2xl p-3 md:p-5 shadow-base shadow-shadow/60 dark:shadow-shadow-dark/60">
      <Button asChild variant={'default'} size={'sm'} className="rounded-xl">
        <Link href={'/markets'}>Back to markets</Link>
      </Button>
      <section className="grid lg:grid-cols-[240px_minmax(200px,1fr)] gap-x-3 mt-3">
        <CoinHeader {...coin?.data.coin} />
        <CoinChart />
        <CoinInfo {...coin?.data?.coin} />
      </section>
    </section>
  );
}
