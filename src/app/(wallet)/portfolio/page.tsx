import { Metadata } from 'next';
import Modal from '@/components/ui/Modal';
import TransactionForm from '@/components/transaction/TransactionForm';
import PortfolioTabs from '@/components/PortfolioTabs';
import PortfolioLoad from '@/components/ui/PortfolioLoad';
import { Suspense } from 'react';
import { getCryptoData } from '@/lib/getCoinsData';

export const metadata: Metadata = {
  title: 'Portfolio | Coin Wallet',
  description: 'Your coin portfolio.',
};

type PortfolioProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Portfolio({ searchParams }: PortfolioProps) {
  const showModal = searchParams?.newTransaction;

  const coins: Promise<CryptoData> = await getCryptoData();
  const coinData = await coins;

  return (
    <section className="h-full">
      {showModal && (
        <Modal title="New Transaction" className="rounded-xl sm:rounded-xl">
          <TransactionForm coins={coinData?.data.coins} />
        </Modal>
      )}

      <Suspense fallback={<PortfolioLoad />}>
        <PortfolioTabs coinsData={coinData?.data.coins} />
      </Suspense>
    </section>
  );
}
