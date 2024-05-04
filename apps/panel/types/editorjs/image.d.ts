declare module "@editorjs/image" {
  import { API } from "@editorjs/editorjs";
  declare type PasteEvent = KeyboardEvent;

  interface Data {}

  interface Config {}

  interface Params {
    data?: LinkToolData;
    config?: Config;
    api: API;
    readOnly?: boolean;
  }

  export default class ImageTool {
    constructor(params: Params);

    render(): HTMLElement;
    save(blockContent: HTMLElement): Data;
  }
}
