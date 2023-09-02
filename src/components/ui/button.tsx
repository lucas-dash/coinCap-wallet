import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-300 dark:focus-visible:ring-slate-800',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-typography-dark hover:bg-secondary/90 dark:bg-secondary-dark dark:text-typography-dark dark:hover:bg-secondary-dark/90',
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-700 dark:text-red-50 dark:hover:bg-red-700/90',
        outline:
          'border border-secondary bg-transparent hover:bg-secondary hover:text-typography-dark dark:border-secondary-dark dark:bg-transparent dark:hover:bg-secondary-dark dark:hover:text-typography-dark',
        secondary:
          'bg-secondary-foreground text-typography-dark hover:bg-secondary-foreground/80 dark:bg-secondary-foreground-dark dark:text-typography dark:hover:bg-secondary-foreground-dark/80',
        ghost:
          'hover:bg-foreground hover:text-typography dark:hover:bg-slate-900 dark:hover:text-typography-dark',
        link: 'text-typography underline-offset-4 hover:underline dark:text-typography-dark',
        accent:
          'bg-gradient-to-tl from-secondary-foreground dark:from-accent-dark hover:from-10% to-secondary hover:to-60% dark:to-secondary-dark text-typography-dark rounded-xl',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
