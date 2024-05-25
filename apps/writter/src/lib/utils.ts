import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BreakPoint } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBreakPoint(): BreakPoint {
  const width = window.innerWidth;

  if (width >= 1536) {
    return '2xl';
  } else if (width >= 1280) {
    return 'xl';
  } else if (width >= 1024) {
    return 'lg';
  } else if (width >= 768) {
    return 'md';
  } else {
    return 'sm';
  }
}
