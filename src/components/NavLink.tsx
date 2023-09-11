'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/button';

type NavLinkProps = {
  href: string;
  name: string;
  icon?: JSX.Element;
};

export default function NavLink({ href, name, icon }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={
        active
          ? buttonVariants({
              variant: 'accent',
              className: 'w-full',
            })
          : buttonVariants({
              variant: 'ghost',
              className: 'rounded-xl w-full',
            })
      }
    >
      {icon}
      {name}
    </Link>
  );
}
