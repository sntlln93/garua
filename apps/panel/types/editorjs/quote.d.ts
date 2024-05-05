declare module '@editorjs/quote' {
  import { API } from '@editorjs/editorjs';

  interface Config {
    quotePlaceholder: string;
    captionPlaceholder: string;
  }

  interface Data {
    text: string;
    caption: string;
    alignment: string;
  }

  interface Params {
    api?: API;
    data?: Data;
    config?: Config;
    readOnly?: boolean;
  }

  class Quote {
    static get isReadOnlySupported(): boolean;
    static get toolbox(): {
      icon: string;
      title: string;
    };
    static get contentless(): boolean;
    static get enableLineBreaks(): boolean;
    static get DEFAULT_QUOTE_PLACEHOLDER(): string;
    static get DEFAULT_CAPTION_PLACEHOLDER(): string;
    static get ALIGNMENTS(): {
      left: string;
      center: string;
    };
    static DEFAULT_ALIGNMENT(): string;
    static get conversionConfig(): {
      import: string;
      export: (data: Data) => string;
    };

    get CSS(): {
      baseClass: string;
      wrapper: string;
      quote: string;
      input: string;
      caption: string;
    };

    /**
     * Tool`s settings properties
     *
     * @returns {*[]}
     */
    get settings(): [
      {
        name: 'left';
        icon: string; //is svg strings
      },
      {
        name: 'center';
        icon: string; //is svg strings
      },
    ];

    static get sanitize(): {
      text: {
        br: boolean;
      };
      caption: {
        br: boolean;
      };
      alignment: boolean;
    };

    constructor(params: Params);

    render(): HTMLElement;
    save(blockContent: HTMLElement): Data;
    renderSettings(): TunesMenuConfig;
    _toggleTune(tune: string): void;
    _make(tagName: string, classNames?: Array | string, attributes?: object): HTMLElement;
  }

  export default Quote;
}
