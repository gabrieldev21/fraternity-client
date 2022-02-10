declare module '*.ttf' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare const IS_PRODUCTION: boolean;
declare const VERSION: string;
