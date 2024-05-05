import { useLayoutEffect, useState } from 'react';

type BreakPoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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

export const useMediaQuery = (): BreakPoint => {
  const [breakpoint, setBreakpoint] = useState<BreakPoint>(getBreakPoint());

  useLayoutEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(getBreakPoint());
    };

    window.addEventListener('resize', updateBreakpoint);

    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  return breakpoint;
};

export default useMediaQuery;
