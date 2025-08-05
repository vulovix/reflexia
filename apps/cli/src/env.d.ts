declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    FOO_SERVICE_URL: string;
    BAR_SERVICE_URL: string;
    BAZ_SERVICE_URL: string;
  }
}
