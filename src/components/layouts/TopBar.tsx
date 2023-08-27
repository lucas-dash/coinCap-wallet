import ModeToggle from '@/components/ui/ModeToggle';
import Link from 'next/link';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import NavSwitcher from './NavSwitcher';

export default function TopBar() {
  return (
    <header className="h-12 flex items-center justify-between bg-primary/80 backdrop-blur-sm dark:bg-primary-dark/80 sticky top-0 z-40">
      <div className=" w-full px-2 sm:px-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <NavSwitcher />
          <Link href={'/'} className="flex items-center gap-2">
            <div className="bg-emerald-300 w-8 h-8 rounded-full"></div>
            <p className="text-lg font-semibold max-[280px]:hidden">
              Coin Wallet
            </p>
          </Link>
        </div>

        <div className="flex items-center">
          <ModeToggle />
          <Button
            asChild
            size={'icon'}
            variant={'ghost'}
            className="rounded-full"
          >
            <Link href={'/profile'}>
              <Icons.user />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
