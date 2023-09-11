import Image from 'next/image';
import { Button } from './button';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type EmptyStateProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
  action?: string;
  height?: number;
  width?: number;
} & HTMLAttributes<HTMLDivElement>;
const EmptyState = ({
  image,
  title,
  description,
  link,
  action,
  height = 150,
  width = 150,
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <article className="flex items-center justify-center flex-col my-3">
      <div className={cn('rounded-xl py-3 px-2', className)} {...props}>
        <Image src={image} alt={title} width={width} height={height} priority />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-typography-detail dark:text-typography-detail-dark text-center pb-2">
        {description}
      </p>
      {link && action && (
        <Button variant={'accent'} size={'sm'} className="rounded-xl" asChild>
          <Link href={link}>{action}</Link>
        </Button>
      )}
    </article>
  );
};

export default EmptyState;
