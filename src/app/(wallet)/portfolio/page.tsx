import Assets from '@/components/Assets';
import Holding from '@/components/Holding';
import { Icons } from '@/components/Icons';
import WalletOverview from '@/components/WalletOverview';
import { Button } from '@/components/ui/button';
import Transactions from '@/components/Transactions';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio | Coin Wallet',
  description: 'Your coin portfolio.',
};

export default function Portfolio() {
  return (
    <section className="h-full">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <h5 className="font-medium">Quick Actions:</h5>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button
            size={'sm'}
            className="rounded-xl shadow-base shadow-secondary-dark/60 dark:shadow-secondary/60"
            asChild
          >
            <Link href={'/portfolio/add-transaction'}>
              <Icons.add className="mr-2" size={20} />
              Add Transaction
            </Link>
          </Button>

          <Button size={'sm'} variant={'outline'} className="rounded-xl">
            <Icons.transfer className="mr-2" size={20} />
            New Transfer
          </Button>
        </div>
      </div>

      <section className="grid gap-5 2xl:container mt-5">
        <div className="flex flex-col md:flex-row gap-5">
          <WalletOverview />
          <Assets />
        </div>
        <Holding />
        <Transactions />
      </section>
    </section>
  );
}
