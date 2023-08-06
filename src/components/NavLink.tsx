'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/Button';

type NavLinkProps = {
  href: string;
  name: string;
  icon?: React.ReactNode;
};

export default function NavLink({ href, name, icon }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`${
          pathname === href
            ? buttonVariants({ variant: 'accent' })
            : buttonVariants({ variant: 'ghost', className: 'rounded-xl' })
        }`}
      >
        {icon}
        {name}
      </a>
    </Link>
  );
}