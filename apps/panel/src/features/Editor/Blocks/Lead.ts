import { headingVariants } from '@/components/ui/typography';
import BaseTextBlock from './BaseTextBlock';
import { cn } from '@/lib/utils';

export default class Lead extends BaseTextBlock {
    public static title = 'Copete';
    protected static icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-3"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>`;

    protected className = cn(headingVariants({ variant: 'p' }), 'text-muted-foreground');
}
