declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ANALYTICS_ID: string;
    NEXT_PUBLIC_ADSENSE_CLIENT_ID: string;
    NEXT_PUBLIC_PRIMARY: string;
    NEXT_PUBLIC_BASE: string;
  }
}

declare module '*.module.css';
declare module '*.json';
declare module "*.md" {
  const value: any;
  export default value;
}
