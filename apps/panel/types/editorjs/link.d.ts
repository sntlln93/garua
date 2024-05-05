declare module '@editorjs/link' {
  import { API } from '@editorjs/editorjs';

  declare type PasteEvent = KeyboardEvent;

  interface LinkToolData {
    link: string;
    meta: {
      title: string;
      site_name: string;
      description: string;
      image: {
        url: string;
      };
    };
  }

  interface Config {
    endpoint: string;
    headers?: Record<string, string>;
  }

  interface Params {
    data?: LinkToolData;
    config?: Config;
    api: API;
    readOnly?: boolean;
  }

  export default class LinkTool {
    /**
     * Notify core that read-only mode supported
     */
    static get isReadOnlySupported(): boolean;

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
      icon: string;
      title: string;
    };

    /**
     * Allow to press Enter inside the LinkTool input
     *
     * @returns {boolean}
     */
    static get enableLineBreaks(): boolean;

    constructor(params: Params);

    /**
     * Renders Block content
     */
    render(): HTMLDivElement;

    /**
     * Return Block data
     */
    save(): LinkToolData;

    /**
     * Validate Block data
     * - check if given link is an empty string or not.
     */
    validate(): boolean;

    /**
     * Stores all Tool's data
     */
    set data(data: LinkToolData): void;

    /**
     * Return Tool data
     *
     * @returns {LinkToolData}
     */
    get data(): LinkToolData;

    get CSS(): object;

    /**
     * Prepare input holder
     *
     * @returns {HTMLElement}
     */
    makeInputHolder(): HTMLElement;

    /**
     * Activates link data fetching by url
     *
     * @param {PasteEvent} event - fetching could be fired by a pase or keydown events
     */
    startFetching(w: PasteEvent): void;

    /**
     * If previous link data fetching failed, remove error styles
     */
    removeErrorStyle(): void;

    /**
     * Select LinkTool input content by CMD+A
     */
    selectLinkUrl(event: KeyboardEvent): void;

    /**
     * Prepare link preview holder
     */
    prepareLinkPreview(): HTMLElement;

    /**
     * Compose link preview from fetched data
     */
    showLinkPreview(meta: MetaData): void;

    /**
     * Show loading progress bar
     */
    showProgress(): void;

    /**
     * Hide loading progress bar
     */
    hideProgress(): Promise<void>;

    /**
     * If data fetching failed, set input error style
     */
    applyErrorStyle(): void;

    /**
     * Sends to backend pasted url and receives link data
     */
    async fetchLinkData(url: string): void;

    /**
     * Link data fetching callback
     */
    onFetch(response: UploadResponseFormat): void;

    /**
     * Handle link fetching errors
     */
    private fetchingFailed(errorMessage: string): void;

    /**
     * Helper method for elements creation
     *
     * @param {string} tagName - name of creating element
     * @param {string|string[]} [classNames] - list of CSS classes to add
     * @param {object} [attributes] - object with attributes to add
     * @returns {HTMLElement}
     */
    make(
      tagName: string,
      classNames: string | string[] = null,
      attributes: object = {}
    ): HTMLElement;
  }
}
