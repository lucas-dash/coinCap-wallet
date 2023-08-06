import React from 'react';
import TopBar from '@/components/TopBar';
import Sidebar from '@/components/Sidebar';
import { Icons } from '@/components/Icons';
import AuthContextProvider from '@/context/AuthContext';

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
          <main className="p-1 sm:p-2 h-[calc(100%-18px)]">{children}</main>
          <footer className="h-[18px] text-xs text-center">
            &copy;Build by MoonShot{' '}
            <Icons.github className="w-3.5 h-3.5 inline-block mb-0.5" />
          </footer>
        </div>
      </div>
    </AuthContextProvider>
  );
}
