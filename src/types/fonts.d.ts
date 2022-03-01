/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
declare module '*.ttf' {
  const content: any;
  export default content;
}

declare const IS_PRODUCTION: boolean;
declare const VERSION: string;
