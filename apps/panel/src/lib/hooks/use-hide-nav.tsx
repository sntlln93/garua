import useMediaQuery from "@/lib/hooks/use-media-query";

type NavigationBar = "tabs" | "sidenav";

export function usePickNav(): NavigationBar {
  const breakpoint = useMediaQuery();

  if (breakpoint === "sm") return "tabs";

  return "sidenav";
}
