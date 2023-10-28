import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coin Wallet',
  description: 'Create your own portfolio for cryptos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} relative text-typography dark:text-typography-dark bg-primary dark:bg-primary-dark`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-secondary/50 absolute top-[-6rem] -z-10 right-[11rem] h-[27.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-secondary-dark/80"></div>
          <div className="bg-secondary-foreground/60 fixed top-[10rem] -z-10 left-[-35rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-secondary-foreground/60"></div>
          <div className="bg-[#2CD095] absolute bottom-[2rem] -z-10 right-[0rem] h-[10.25rem] w-[15rem] rounded-full blur-[10rem] sm:w-[18rem] dark:bg-[#2CD095]/60"></div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
