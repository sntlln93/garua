import { headingVariants } from '@/components/ui/typography-variants';
import BaseTextBlock from './BaseTextBlock';
import { cn } from '@/lib/utils';

export default class Title extends BaseTextBlock {
  public static title = 'Título';
  protected static icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>`;

  protected className = cn(headingVariants({ variant: 'h1' }), 'uppercase');
}
