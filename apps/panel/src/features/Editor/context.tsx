import EditorJS, { API } from '@editorjs/editorjs';
import { MutableRefObject, PropsWithChildren, createContext, useCallback, useRef } from 'react';

import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import Title from './Blocks/Title';
import Subtitle from './Blocks/Subtitle';
import Lead from './Blocks/Lead';
import Kicker from './Blocks/Kicker';

export const EditorContext = createContext<{
  initEditor: () => void;
  editorInstanceRef: MutableRefObject<EditorJS | null>;
}>({
  initEditor: () => {},
  editorInstanceRef: { current: null },
});

export default function EditorProvider(props: PropsWithChildren) {
  const editorInstanceRef = useRef<EditorJS | null>(null);

  const onChange = async (api: API) => {
    const data = await api.saver.save();
    console.log(data);
  };

  const initEditor = useCallback(() => {
    const editor = new EditorJS({
      onChange: onChange,
      hideToolbar: false,
      holder: 'editorjs',
      placeholder: 'Escribí acá',
      inlineToolbar: true,
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        Title: {
          class: Title,
        },
        Subtitle: {
          class: Subtitle,
        },
        Lead: {
          class: Lead,
        },
        Kicker: {
          class: Kicker,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            },
          },
        },
        linkTool: {
          class: LinkTool,
          inlineToolbar: false, //hide on add menu but show when selecting text
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
