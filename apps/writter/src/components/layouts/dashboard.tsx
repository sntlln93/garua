import { PropsWithChildren } from 'react';
import Aside from '@/components/aside';
import { useAtomValue } from 'jotai';
import { dashboardContentLeftOffset } from '@/stores/ui';
import { usePickNav } from '@/lib/hooks/use-hide-nav';
import { FAB } from '../fab';

export function DashboardLayout({ children }: PropsWithChildren) {
  const offset = useAtomValue(dashboardContentLeftOffset);
  const navToDisplay = usePickNav();

  return (
    <div className="flex flex-row sm:min-w-[200px]">
      {navToDisplay === 'sidenav' && <Aside />}
      {navToDisplay === 'tabs' && <FAB />}
      <div className={`flex-1 px-10 py-5 ml-[${offset}]`}>
        {/* <Breadcrumbs /> */}
        {children}
      </div>
    </div>
  );
}
