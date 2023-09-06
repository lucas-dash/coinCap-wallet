import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import Modal from '@/components/ui/Modal';
import TransactionForm from '@/components/transaction/TransactionForm';
import { getCryptoData } from '@/lib/getCoinsData';
import PortfolioTabs from '@/components/PortfolioTabs';

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
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <h5 className="font-medium">Quick Action:</h5>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button
            size={'sm'}
            className="rounded-xl shadow-base shadow-secondary-dark/60 dark:shadow-secondary/60"
            asChild
          >
            <Link href={'/portfolio/?newTransaction=true'}>
              <Icons.add className="mr-2" size={20} />
              Add Transaction
            </Link>
          </Button>
        </div>
      </div>

      <PortfolioTabs coinsData={coinData?.data.coins} />
    </section>
  );
}
