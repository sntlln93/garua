import { PropsWithChildren } from "react";
import SideNavbar from "@/components/sidenav";
import { useAtomValue } from "jotai";
import { dashboardContentLeftOffset } from "@/stores/ui";
import { usePickNav } from "@/lib/hooks/use-hide-nav";
import { FAB } from "../fab";

export function DashboardLayout({ children }: PropsWithChildren) {
  const offset = useAtomValue(dashboardContentLeftOffset);
  const navToDisplay = usePickNav();

  return (
    <div className="flex flex-row sm:min-w-[200px]">
      {navToDisplay === "sidenav" && <SideNavbar />}
      {navToDisplay === "tabs" && <FAB />}
      <div className={`w-full py-5 px-10 ml-[${offset}]`}>
        {/* <Breadcrumbs /> */}
        {children}
      </div>
    </div>
  );
}
