import { ref, readonly } from 'vue'
export function useLocal() {
  const lsLang = localStorage.getItem('lang')
  const lang = ref(lsLang || 'en')
  function setLang(newLang: string) {
    if (typeof newLang !== 'string' || newLang.length !== 2) {
      return
    }
    lang.value = newLang
    localStorage.setItem('lang', newLang)
  }
  return {
    getLang: readonly(lang),
    setLang
  }
}
