import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-sm hidden sm:flex min-w-[200px] h-[calc(100vh-48px)] sticky top-[48px]">
      <nav className="flex flex-col gap-4">
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/portfolio'}>Portfolio</Link>
        <Link href={'/cryptocurrency'}>Cryptocurrency</Link>
      </nav>
    </aside>
  );
}
