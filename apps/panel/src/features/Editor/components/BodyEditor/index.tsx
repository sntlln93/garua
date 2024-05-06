import { useEffect, useRef } from 'react';
import { useEditor } from './useEditor';
import { SectionLayout } from '../SectionLayout';

export function BodyEditor() {
  const { initEditor } = useEditor();
  const editorRef = useRef(false);

  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, [initEditor]);

  return (
    <SectionLayout name="Cuerpo">
      <div id="editorjs" />
    </SectionLayout>
  );
}
