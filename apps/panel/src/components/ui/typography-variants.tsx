import { cva } from 'class-variance-authority';

export const headingVariants = cva(' tracking-tight', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold',
      h4: 'scroll-m-20 text-xl font-semibold',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});
