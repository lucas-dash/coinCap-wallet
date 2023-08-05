import React from 'react';
import TopBar from '@/components/TopBar';
import Sidebar from '@/components/Sidebar';

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <div className="flex min-h-[calc(100vh-48px)]">
        <Sidebar />
        <div className="w-full">
          <main className="p-1 sm:p-2 h-[calc(100%-18px)]">{children}</main>
          <footer className="h-[18px] text-xs text-center">
            &copy;Copyright MoonShot
          </footer>
        </div>
      </div>
    </>
  );
}
