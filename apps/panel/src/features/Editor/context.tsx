import EditorJS, { BlockToolConstructable } from "@editorjs/editorjs";
import {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useRef,
} from "react";

import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";

export const EditorContext = createContext<{
  initEditor: () => void;
  editorInstanceRef: MutableRefObject<EditorJS | null>;
}>({
  initEditor: () => {},
  editorInstanceRef: { current: null },
});

export default function EditorProvider(props: PropsWithChildren) {
  const editorInstanceRef = useRef<EditorJS | null>(null);

  const initEditor = useCallback(() => {
    const editor = new EditorJS({
      hideToolbar: false,
      holder: "editorjs",
      placeholder: "write something",
      inlineToolbar: true,
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        header: {
          //TODO: fix this
          class: Header as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a Header",
            levels: [1, 2, 3, 4, 5],
            defaultLevel: 2,
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
          },
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
          },
        },
      },
    });

    editorInstanceRef.current = editor;
  }, []);

  return (
    <EditorContext.Provider value={{ initEditor, editorInstanceRef }}>
      {props.children}
    </EditorContext.Provider>
  );
}
