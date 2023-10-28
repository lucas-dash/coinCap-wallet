import { getCryptoData } from '@/lib/getCoinsData';
import { Metadata } from 'next';
import DashboardTabs from '@/components/DashboardTabs';
import { Suspense } from 'react';
import PortfolioLoad from '@/components/ui/PortfolioLoad';
import CoinSlider from '@/components/CoinSlider';

export const metadata: Metadata = {
  title: 'Dashboard | Coin Wallet',
  description: 'Your coin portfolio.',
};

export default async function Dashboard() {
  const coinsRes: Promise<CryptoData> = await getCryptoData();
  const coinsData = await coinsRes;

  return (
    <section className="h-full">
      <CoinSlider coinsData={coinsData} />

      <Suspense fallback={<PortfolioLoad />}>
        <DashboardTabs coinsData={coinsData?.data.coins} />
      </Suspense>
    </section>
  );
}
