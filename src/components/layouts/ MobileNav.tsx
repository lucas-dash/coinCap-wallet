'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '../ui/button';
import { Icons } from '../ui/Icons';
import NavLink from '../ui/NavLink';
import LogOut from '../LogOut';
import { motion, AnimatePresence, stagger } from 'framer-motion';

const sidebarLinks = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icons.dashboard className="mr-2" />,
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <Icons.portfolio className="mr-2" />,
  },
  {
    title: 'Watchlist',
    path: '/watchlist',
    icon: <Icons.watchlist className="mr-2" />,
  },
  {
    title: 'Markets',
    path: '/markets',
    icon: <Icons.trendingUp className="mr-2" />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icons.profile className="mr-2" />,
  },
] as const;

type MobileNavProps = {
  close: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ close }: MobileNavProps) {
  const menuVariant = {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: 'ease',
      },
    },
    exit: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {close && (
        <motion.section
          className="fixed inset-0 z-40 origin-left bg-primary/95 dark:bg-primary-dark/95 min-h-screen md:hidden p-2 flex flex-col items-end backdrop-blur-sm"
          variants={menuVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Button
            variant={'ghost'}
            size={'icon'}
            className="rounded-full"
            onClick={() => close(false)}
          >
            <Icons.close />
          </Button>

          <div className=" w-full flex flex-col items-center justify-around h-full">
            <motion.nav className="flex flex-col items-start gap-7 mx-auto">
              {sidebarLinks.map(({ title, path, icon }, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    onClick={() => close(false)}
                  >
                    <NavLink key={path} href={path} name={title} icon={icon} />
                  </motion.div>
                );
              })}
            </motion.nav>

            <div className="w-full">
              <LogOut />
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
