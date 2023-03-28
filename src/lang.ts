import type { Languages } from './types/index.d'
type TranslationRecord = Record<Languages, string>
type langObj = Record<string, TranslationRecord | Record<string, TranslationRecord>>
const transaltion: langObj = {
  greeting: {
    en: 'Grreting',
    hi: 'अभिवादन',
    fr: `salutation`,
    hello: {
      en: 'Hello !',
      fr: 'Bonjour',
      hi: 'नमस्ते !'
    },
    how_are_you: {
      en: 'Hope you are doing good ',
      fr: "J'espère que tu vas bien .",
      hi: 'आशा है कि तुम अच्छा कर रहे हो '
    }
  }
}
export default transaltion
