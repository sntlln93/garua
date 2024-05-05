import { cn } from '@/lib/utils';

export default class BaseTextBlock {
    public static title = 'default';
    protected static $icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>`;

    protected className = '';

    render(): HTMLTextAreaElement {
        const $textarea: HTMLTextAreaElement = document.createElement('textarea');
        $textarea.setAttribute('placeholder', 'Ingresa el título aquí');
        $textarea.className = cn(
            this.className,
            'bg-transparent outline-none w-full resize-none overflow-hidden'
        );

        // Auto adjust the height of the $textarea to fit its content
        $textarea.addEventListener('input', () => {
            $textarea.style.height = 'auto';
            $textarea.style.overflowY = 'hidden ';
            $textarea.style.height = $textarea.scrollHeight + 'px';
            $textarea.style.paddingBottom = '0';
        });

        return $textarea;
    }

    save(blockContent: HTMLInputElement) {
        return {
            text: blockContent.value,
        };
    }

    static get toolbox() {
        return {
            title: this.title,
            icon: this.$icon,
        };
    }
}
