import { useEffect, useRef } from 'react';
import { useEditor } from './useEditor';

export function Editor() {
  const { initEditor } = useEditor();
  const editorRef = useRef(false);

  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, [initEditor]);

  return (
    <div className="rounded-lg bg-zinc-200 py-4">
      <div id="editorjs"></div>
    </div>
  );
}
