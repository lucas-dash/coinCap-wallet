'use client';

import Link from 'next/link';
import { Icons } from './Icons';
import { Button } from './ui/Button';
import { useState } from 'react';
import MobileNav from './ MobileNav';

export default function NavSwitcher() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant={'ghost'}
        size={'icon'}
        className="sm:hidden rounded-full"
        onClick={() => setOpen(true)}
      >
        <Icons.panel />
      </Button>

      {open && <MobileNav close={setOpen} />}
    </>
  );
}
