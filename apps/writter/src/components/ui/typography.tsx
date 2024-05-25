import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { headingVariants } from './typography-variants';

export function Heading({
  className,
  children,
  variant,
}: {
  className?: string;
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
}) {
  const HeadingElement = variant;

  return (
    <HeadingElement className={cn(headingVariants({ variant, className }))}>
      {children}
    </HeadingElement>
  );
}
