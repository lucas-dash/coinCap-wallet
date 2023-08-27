import { Icons } from '@/components/Icons';
import ActionForm from '@/components/transaction/ActionForm';
import { Button } from '@/components/ui/button';
import { getCryptoData } from '@/lib/getCoinsData';
import Link from 'next/link';

export default async function AddTransaction() {
  const coinsRes: Promise<CryptoData> = await getCryptoData();
  const coinsData = await coinsRes;

  return (
    <section className="h-full bg-foreground/70 backdrop-blur-sm dark:bg-foreground-dark/60 rounded-2xl 2xl:container p-2 ">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold px-1">New Transaction</h4>
        <Button variant={'ghost'} size={'icon'} asChild>
          <Link href={'/portfolio'}>
            <Icons.close />
          </Link>
        </Button>
      </div>

      <section>
        <ActionForm coins={coinsData?.data.coins} />
      </section>
    </section>
  );
}
