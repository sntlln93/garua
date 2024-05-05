import { headingVariants } from "@/components/ui/typography";
import BaseTextBlock from "./BaseTextBlock";

export default class Kicker extends BaseTextBlock {
  public static title = "Volanta";
  protected static icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-4"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 10v4h4"/><path d="M21 10v8"/></svg>`;

  protected className = headingVariants({ variant: "h4" });
}
