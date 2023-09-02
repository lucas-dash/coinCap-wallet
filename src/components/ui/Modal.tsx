'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { HTMLAttributes, ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type ModalProps = {
  title: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Modal({
  title,
  children,
  className,
  ...props
}: ModalProps) {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className={cn('', className)} {...props}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
