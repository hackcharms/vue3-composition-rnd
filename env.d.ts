/// <reference types="vite/client" />
import type { Languages } from './types/index.d'

interface ImportMetaEnv {
  readonly VITE_LOCAL: Languages
  // more env variables...
}
