import { cn } from '@/lib/utils';
import { SectionLayout } from './SectionLayout';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

type GenericEditorProps = {
  name: string;
  className?: string;
  placeholder: string;
};

export function GenericEditor(props: GenericEditorProps) {
  const fakeTextareaRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (fakeTextareaRef.current) {
      fakeTextareaRef.current.innerText = '';
    }
  }, []);

  useEffect(() => {
    if (fakeTextareaRef.current) {
      fakeTextareaRef.current.style.height = 'auto';
      const scrollHeight = fakeTextareaRef.current.scrollHeight;
      fakeTextareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [fakeTextareaRef, value]);

  const handleChange = (event: ChangeEvent<HTMLDivElement>) => {
    setValue(event.target.innerText);
  };
  return (
    <SectionLayout name={props.name}>
      <div
        contentEditable
        ref={fakeTextareaRef}
        onChange={handleChange}
        data-placeholder={props.placeholder}
        className={cn(
          'w-full cursor-text resize-none bg-transparent outline-none',
          props.className
        )}
      />
    </SectionLayout>
  );
}
