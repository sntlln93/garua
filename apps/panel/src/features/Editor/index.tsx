import { useEffect, useRef } from "react";
import { useEditor } from "./useEditor";
import useMediaQuery from "@/lib/hooks/use-media-query";

export function Editor() {
  const { initEditor } = useEditor();
  const editorRef = useRef(false);
  const bp = useMediaQuery();

  console.log(bp);
  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, [initEditor]);

  return (
    <div className=" bg-zinc-200 rounded-lg">
      <div id="editorjs"></div>
    </div>
  );
}
