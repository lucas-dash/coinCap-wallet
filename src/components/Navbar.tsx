import Link from 'next/link';
import ModeToggle from './ModeToggle';
import { buttonVariants } from './ui/Button';

export default function Navbar() {
  return (
    <header className="bg-primary dark:bg-primary-dark h-12 flex items-center">
      <nav className="flex items-center justify-between w-full px-2 sm:px-4">
        <Link href={'/'} className="flex items-center gap-2">
          <div className="h-8 w-8 bg-emerald-300 rounded-full"></div>
          <p className="text-lg font-semibold hidden min-[353px]:inline-block">
            Coin Wallet
          </p>
        </Link>
        <div className="flex items-center sm:gap-2">
          <ModeToggle />
          <div className="flex items-center gap-1.5">
            <Link
              href={'/login'}
              className={buttonVariants({
                variant: 'ghost',
                className: 'rounded-3xl',
              })}
            >
              Log in
            </Link>
            <Link
              href={'/sign-up'}
              className={buttonVariants({ className: 'rounded-3xl' })}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
