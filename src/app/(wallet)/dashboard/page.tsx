import { getCryptoData } from '@/lib/getCoinsData';
import { Metadata } from 'next';
import { Icons } from '@/components/ui/Icons';
import CoinImage from '@/components/ui/CoinImage';
import DashboardTabs from '@/components/DashboardTabs';
import { Suspense } from 'react';
import PortfolioLoad from '@/components/ui/PortfolioLoad';

export const metadata: Metadata = {
  title: 'Dashboard | Coin Wallet',
  description: 'Your coin portfolio.',
};

export default async function Dashboard() {
  const coinsRes: Promise<CryptoData> = await getCryptoData();
  const coinsData = await coinsRes;

  return (
    <section className="h-full">
      <section className="w-full flex items-center overflow-hidden gap-2">
        {coinsData?.data.coins
          .slice(0, 5)
          .map(({ uuid, name, change, iconUrl }) => {
            const changeIcon = change.includes('-') ? (
              <Icons.trendDown size={18} />
            ) : (
              <Icons.trendUp size={18} />
            );

            return (
              <div
                key={uuid}
                className="flex min-w-max items-center bg-foreground/60 dark:bg-foreground-dark/60 rounded-2xl py-1 px-1.5"
              >
                <CoinImage src={iconUrl} alt={name} width={20} height={20} />
                <p className="text-sm font-medium px-1">{name}</p>

                <div
                  className={`w-max flex items-center text-sm ${
                    change.includes('-') ? 'text-downchange' : 'text-upchange'
                  }`}
                >
                  {changeIcon}
                  <p>{change}%</p>
                </div>
              </div>
            );
          })}
      </section>

      <Suspense fallback={<PortfolioLoad />}>
        <DashboardTabs coinsData={coinsData?.data.coins} />
      </Suspense>
    </section>
  );
}
