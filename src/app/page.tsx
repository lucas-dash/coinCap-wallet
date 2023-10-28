'use client';

import Navbar from '@/components/layouts/Navbar';
import { Icons } from '@/components/ui/Icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen ">
        <section className="flex flex-col gap-5 justify-center items-center h-[calc(88vh-56px)]">
          <h1 className="text-4xl font-semibold text-center py-5 px-3">
            Create your
            <span className="inline-block bg-gradient-to-tr dark:bg-gradient-to-r from-secondary dark:from-secondary-foreground-dark to-secondary-foreground dark:to-green-500 text-transparent bg-clip-text px-2">
              cryptocurrency
            </span>
            portfolio
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

        <section className="w-11/12 mx-auto flex items-center justify-center py-20 my-40 relative container">
          <motion.div
            className="absolute right-0 top-0 z-30 rounded-xl overflow-hidden shadow-base shadow-slate-400 dark:shadow-slate-700 w-[100px] md:w-[200px]"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 100, transition: { duration: 0.4 } }}
          >
            <Image
              src={'/watchlistShow.png'}
              alt="watchlist showcase"
              width={250}
              height={250}
              className="rounded-xl aspect-auto"
            />
          </motion.div>

          <motion.div
            className="absolute left-0 bottom-0 z-30 rounded-xl shadow-base shadow-slate-400 dark:shadow-slate-700 max-[480px]:w-[70px] w-[90px] sm:w-[130px] lg:w-[200px] 2xl:translate-x-16"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 100, transition: { duration: 0.4 } }}
          >
            <Image
              src={'/assetsShowcase.png'}
              alt="assets showcase"
              width={250}
              height={250}
              className="rounded-xl aspect-auto"
            />
          </motion.div>
          <Image
            src={'/PortfolioScreen.png'}
            alt="portfolio showcase"
            className="w-auto h-auto rounded-lg aspect-video z-20 min-w-[260px]"
            width={800}
            height={800}
          />
        </section>
      </main>

      <footer className="pt-10 pb-4 container">
        <Link
          href={'https://github.com/lucas-dash'}
          className="hover:underline text-sm"
        >
          &copy;2023 Build with passion by Moonshot{' '}
          <Icons.github className="w-3.5 h-3.5 inline-block mb-0.5" />
        </Link>
      </footer>
    </>
  );
}
