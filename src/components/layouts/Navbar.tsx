import Link from 'next/link';
import ModeToggle from '../ui/ModeToggle';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-2 left-1 right-1 sm:left-4 sm:right-4 rounded-full bg-primary/80 dark:bg-primary-dark/80 h-12 flex items-center backdrop-blur-sm z-50 2xl:container">
      <nav className="flex items-center justify-between w-full px-2 sm:px-2 md:px-4 ">
        <Link href={'/'} className="flex items-center gap-2">
          <div className="h-8 w-8 bg-slate-50 rounded-full flex items-center justify-center">
            <Image src={'/wallet.svg'} alt="icon" width={24} height={24} />
          </div>
          <p className="text-lg font-semibold hidden min-[400px]:inline-block">
            CoinCap Wallet
          </p>
        </Link>
        <div className="flex items-center sm:gap-2">
          <ModeToggle />
          <div className="flex items-center gap-1.5">
            <Button
              asChild
              variant={'ghost'}
              size={'sm'}
              className="rounded-3xl"
            >
              <Link href={'/login'}>Log in</Link>
            </Button>
            <Button asChild className="rounded-3xl" size={'sm'}>
              <Link href={'/sign-up'}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
