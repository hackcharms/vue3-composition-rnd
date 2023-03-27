import type { Languages } from './types/index.d'
type TranslationRecord = Record<Languages, string>
type langObj = Record<string, TranslationRecord | Record<string, TranslationRecord>>
const transaltion: langObj = {
  greeting: {
    en: 'Grret en',
    hi: 'Grret hi',
    ur: 'Grret ur',
    hello: {
      en: 'Hello !',
      ur: 'Asslam !',
      hi: 'Namaste !'
    }
  }
}
export default transaltion
