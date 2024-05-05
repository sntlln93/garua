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
    <div className=" bg-zinc-200 rounded-lg py-4">
      <div id="editorjs"></div>
    </div>
  );
}
