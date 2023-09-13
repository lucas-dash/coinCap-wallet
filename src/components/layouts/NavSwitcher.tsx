'use client';

import { Icons } from '../ui/Icons';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import MobileNav from './ MobileNav';

export default function NavSwitcher() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  return (
    <>
      <Button
        variant={'ghost'}
        size={'icon'}
        className="md:hidden rounded-full"
        onClick={() => setOpen(true)}
      >
        <Icons.panel />
      </Button>

      {open && <MobileNav close={setOpen} />}
    </>
  );
}
