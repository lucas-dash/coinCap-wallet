import Navbar from '@/components/layouts/Navbar';
import { Icons } from '@/components/ui/Icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen ">
        <section className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-56px)]">
          <h1 className="text-4xl font-semibold text-center py-5 px-3">
            Create your cryptocurrency portfolio
          </h1>
          <Button asChild variant={'accent'} className="rounded-xl">
            <Link href={'/dashboard'}>Get Started for free</Link>
          </Button>
        </section>

        <section className="w-11/12 mx-auto my-14 flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center">
          <article className="flex flex-col justify-between rounded-[48px] p-5 bg-primary-dark dark:bg-slate-900 min-w-[250px] max-w-xs min-h-[250px]">
            <div className="rounded-full w-14 h-14 bg-primary flex items-center justify-center">
              <Icons.security className="text-typography w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h4 className="font-medium text-2xl text-typography-dark pb-5">
              Securely track your transactions
            </h4>
          </article>

          <article className="flex flex-col justify-between rounded-[48px] p-5 bg-primary-dark dark:bg-slate-900 min-w-[250px] max-w-xs min-h-[250px]">
            <div className="rounded-full w-14 h-14 bg-primary flex items-center justify-center">
              <Icons.trendingUp className="text-typography w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h4 className="font-medium text-2xl text-typography-dark pb-5">
              Keep track of your cryptocurrencies
            </h4>
          </article>

          <article className="flex flex-col justify-between rounded-[48px] p-5 bg-primary-dark dark:bg-slate-900 min-w-[250px] max-w-xs min-h-[250px]">
            <div className="rounded-full w-14 h-14 bg-primary flex items-center justify-center">
              <Icons.watchlist className="text-typography w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h4 className="font-medium text-2xl text-typography-dark pb-5">
              Create your personal watchlist
            </h4>
          </article>
        </section>

        <section className="w-11/12 mx-auto flex items-center justify-center py-20 relative">
          <Image
            src={'/watchlistScreen.png'}
            alt="watchlist showcase"
            width={250}
            height={250}
            className="rounded-xl absolute right-0 bottom-0 translate-x-3 md:translate-y-32 w-[120px] h-[120px] md:w-auto md:h-auto aspect-square z-30"
          />
          <Image
            src={'/PortfolioScreen.png'}
            alt="portfolio showcase"
            className="w-auto h-auto rounded-xl aspect-video z-20"
            width={800}
            height={800}
          />
        </section>
      </main>

      <footer className="pt-10 pb-4">
        <p className="">&copy;2023 Build by Moonshot</p>
        <div></div>
      </footer>
    </>
  );
}
