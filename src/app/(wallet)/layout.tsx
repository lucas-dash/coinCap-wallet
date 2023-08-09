import React from 'react';
import TopBar from '@/components/layouts/TopBar';
import Sidebar from '@/components/layouts/Sidebar';
import { Icons } from '@/components/Icons';
import AuthContextProvider from '@/context/AuthContext';
import Link from 'next/link';

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <TopBar />
      <div className="flex min-h-[calc(100vh-48px)]">
        <Sidebar />
        <div className="w-full">
          <main className="p-1.5 sm:p-2 h-[calc(100%-20px)]">{children}</main>
          <footer className="h-[20px] text-xs text-center">
            <Link
              href={'https://github.com/lucas-dash'}
              className="hover:underline"
            >
              Build by MoonShot{' '}
              <Icons.github className="w-3.5 h-3.5 inline-block mb-0.5" />
            </Link>
          </footer>
        </div>
      </div>
    </AuthContextProvider>
  );
}
