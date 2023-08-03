import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      <body
        className={`${inter.className} relative text-typography dark:text-typography-dark bg-primary-dark dark:bg-primary`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute w-[14rem] h-[14rem] rounded-full top-10 bg-accent-dark right-8 blur-[6rem] -z-10"></div>
          <div className="absolute w-60 h-52 rounded-full top-16 left-80 bg-secondary blur-[10rem] -z-10"></div>
          <div className="absolute w-48 h-48 rounded-full top-52 left-10 bg-secondary-foreground blur-[7rem] -z-10"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
