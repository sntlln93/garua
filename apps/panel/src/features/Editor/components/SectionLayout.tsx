import { Heading } from '@/components/ui/typography';
import { PropsWithChildren } from 'react';

type SectionLayoutProps = PropsWithChildren & { name: string };

export function SectionLayout({ children, name }: SectionLayoutProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex flex-col gap-2 sm:px-10 md:w-3/4 lg:w-4/5 xl:w-5/6">
        <Heading variant="h3" className="self-start">
          {name}
        </Heading>
        <div className="w-full rounded-lg bg-zinc-200 py-3">{children}</div>
      </main>
    </div>
  );
}
