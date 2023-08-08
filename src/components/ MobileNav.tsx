'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/Button';
import { Icons } from './Icons';
import NavLink from './NavLink';
import LogOut from './LogOut';

type MobileNavProps = {
  close: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ close }: MobileNavProps) {
  return (
    <section className="absolute inset-0 z-40 bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-sm min-h-screen sm:hidden p-2 flex flex-col items-end">
      <Button
        variant={'ghost'}
        size={'icon'}
        className="rounded-full"
        onClick={() => close(false)}
      >
        <Icons.close />
      </Button>

      <div className=" w-full flex flex-col items-center justify-evenly h-full">
        <nav
          className=" flex flex-col items-start gap-7 py-6 mx-auto"
          onClick={() => close(false)}
        >
          <NavLink
            href="/dashboard"
            name="Dashboard"
            icon={<Icons.dashboard className="mr-2" />}
          />
          <NavLink
            href="/portfolio"
            name="Portfolio"
            icon={<Icons.portfolio className="mr-2" />}
          />
          <NavLink
            href="/watchlist"
            name="Watchlist"
            icon={<Icons.watchlist className="mr-2" />}
          />
          <NavLink
            href="/markets"
            name="Markets"
            icon={<Icons.trendingUp className="mr-2" />}
          />
          <NavLink
            href="/profile"
            name="Profile"
            icon={<Icons.profile className="mr-2" />}
          />
        </nav>
        <div className="w-full">
          <LogOut />
        </div>
      </div>
    </section>
  );
}
