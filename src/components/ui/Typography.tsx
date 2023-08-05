import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('text-typography dark:text-typography-dark', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-medium',
      h5: 'text-lg font-medium',
      h6: 'text-base font-normal',
      p: 'text-base font-normal',
      span: 'text-sm font-normal text-typography-detail dark:text-typography-detail-dark',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});
// variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',

interface Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

export default function Typography({
  variant,
  children,
  className,
  ...props
}: Props) {
  const Comp = variant || 'p';

  return (
    <Comp className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Comp>
  );
}
