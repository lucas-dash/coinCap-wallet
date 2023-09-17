import CoinChart from '@/components/CoinChart';
import CoinHeader from '@/components/CoinHeader';
import CoinInfo from '@/components/CoinInfo';
import { Icons } from '@/components/ui/Icons';
import { Button } from '@/components/ui/button';
import { getCoin } from '@/lib/getCoin';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type CoinTypeProps = {
  params: {
    coinId: string;
  };
};

export async function generateMetadata({ params: { coinId } }: CoinTypeProps) {
  const coinResponse: Promise<CoinData> = await getCoin(coinId);
  const coin = await coinResponse;

  if (!coin) {
    return {
      title: 'Coin not found | Coin Wallet',
    };
  }

  if (!coin?.data?.coin?.name) {
    notFound();
  }

  return {
    title: `${coin?.data?.coin?.name} | Coin Wallet`,
    description: `${coin?.data?.coin?.name} stats`,
  };
}

export default async function Coin({ params: { coinId } }: CoinTypeProps) {
  const coinResponse: Promise<CoinData> = await getCoin(coinId);
  const coin = await coinResponse;

  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 h-full rounded-2xl p-3 md:p-5 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 2xl:container">
      <Link href={'/markets'}>
        <Button variant={'default'} size={'sm'} className="rounded-xl">
          <Icons.back className="mr-1" />
          Back to markets
        </Button>
      </Link>
      <section className="grid lg:grid-cols-[250px_minmax(200px,1fr)] gap-5 lg:gap-x-3 mt-3">
        <CoinHeader {...coin?.data?.coin} />
        <CoinChart {...coin?.data?.coin} />
        <CoinInfo {...coin?.data?.coin} />
      </section>
    </section>
  );
}
