import { API, SanitizerConfig } from "@editorjs/editorjs";

interface HeaderData {
  text: string;
  level: number;
}

interface HeaderConfig {
  placeholder: string;
  levels: number[];
  defaultLevel: number;
}

interface Level {
  number: number;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  svg: string;
}

interface Params {
  data?: HeaderData;
  config?: HeaderConfig;
  api: API;
  readOnly?: boolean;
}

declare class Header {
  constructor(params: Params);

  normalizeData(data: HeaderData): HeaderData;

  setLevel(level: number): void;

  merge(data: HeaderData): void;

  validate(blockData: HeaderData): boolean;

  save(toolsContent: HTMLElement): HeaderData;

  static get conversionConfig(): { export: string; import: string };

  static get sanitize(): SanitizerConfig;

  static get isReadOnlySupported(): boolean;

  get data(): HeaderData;

  set data(data: HeaderData);

  getTag(): HTMLElement;

  get currentLevel(): Level;

  get defaultLevel(): Level;

  get levels(): Level[];

  static get toolbox(): {
    icon: string;
    title: string;
  };

  render(): HTMLElement;
}

export default Header;
