/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENTDB_CATEGORY_URL: string;
  readonly VITE_OPENTDB_API_URL: string;
  readonly VITE_LOREM_PICSUM_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
