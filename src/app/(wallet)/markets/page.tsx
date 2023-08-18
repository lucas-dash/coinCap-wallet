import MarketsCoins from '@/components/MarketsCoins';
import MarketsHeader from '@/components/MarketsHeader';
import { getCryptoData } from '@/lib/getCoinsData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Markets | Coin Wallet',
  description: 'Search for coins in realtime crypto markets.',
};

export default async function Markets() {
  const coinsRes: Promise<CryptoData> = await getCryptoData();
  const coinsData = await coinsRes;

  return (
    <section className="h-full">
      <MarketsHeader {...coinsData?.data.stats} />
      <MarketsCoins coinData={coinsData?.data?.coins} />
    </section>
  );
}
