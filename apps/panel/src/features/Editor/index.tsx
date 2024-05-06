import { cn } from '@/lib/utils';
import { BodyEditor } from './components/BodyEditor';
import { GenericEditor } from './components/GenericEditor';
import { headingVariants } from '@/components/ui/typography-variants';

export function Editor() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <GenericEditor
        name="Volanta"
        placeholder="Escribí acá la volanta"
        className="text-sm font-bold uppercase"
      />
      <GenericEditor
        name="Título"
        placeholder="Escribí acá el título"
        className={cn('uppercase', headingVariants({ variant: 'h1' }))}
      />
      <GenericEditor
        name="Subtítulo"
        placeholder="Escribí acá el subtítulo"
        className={cn(headingVariants({ variant: 'h3' }))}
      />
      <GenericEditor
        name="Copete"
        placeholder="Escribí acá el copete"
        className={cn(headingVariants({ variant: 'h3' }))}
      />
      <BodyEditor />
    </div>
  );
}
