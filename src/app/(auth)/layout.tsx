import Navbar from '@/components/layouts/Navbar';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background/70 dark:bg-background-dark/70 min-h-screen grid sm:grid-cols-2 pt-[60px] sm:pt-0">
        <section className="order-2 flex items-center justify-center">
          <Image
            src="/BitcoinImg.png"
            alt="bitcoin image by Stactive Studio"
            height={350}
            width={350}
          />
        </section>
        {children}
      </main>
    </>
  );
}
