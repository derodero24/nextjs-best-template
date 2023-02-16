declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ENV: 'prod' | 'dev';
    readonly NEXT_PUBLIC_BASE_URL: string;
  }
}
