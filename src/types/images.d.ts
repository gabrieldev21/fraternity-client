/* eslint-disable prettier/prettier */
declare module '*.svg' {
  const content: unknown;
  export default content;
}

declare const IS_PRODUCTION: boolean;
declare const VERSION: string;

declare module '*.png' {
  const content: unknown;
  export default content;
}

declare module '*.jpg' {
  const content: unknown;
  export default content;
}
