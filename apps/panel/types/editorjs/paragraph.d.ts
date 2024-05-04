declare module "@editorjs/paragraph" {
  import { API, PasteEvent } from "@editorjs/editorjs";
  interface ParagraphData {
    text: string;
  }

  interface ParagraphConfig {
    placeholder?: string;
    preserveBlank?: boolean;
  }

  interface ParagraphParams {
    api: API;
    data?: ParagraphData;
    config?: ParagraphConfig;
    readOnly?: boolean;
  }

  class Paragraph {
    static get DEFAULT_PLACEHOLDER(): string;

    constructor(params: ParagraphParams);

    onKeyUp(e: KeyboardEvent): void;

    drawView(): HTMLElement;

    render(): HTMLDivElement;

    merge(t: ParagraphData): void;

    validate(t: ParagraphData): boolean;

    save(t: HTMLDivElement): ParagraphData;

    onPaste(t: PasteEvent): void;

    static get conversionConfig(): { export: string; import: string };

    static get sanitize(): { text: { br: boolean } };

    static get isReadOnlySupported(): boolean;

    static get pasteConfig(): { tags: string[] };

    static get toolbox(): { icon: string; title: string };
  }

  export default Paragraph;
}
