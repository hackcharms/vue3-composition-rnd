import type { Plugin } from 'vue'

import lang from '@/lang'
import { useLocal } from '@/composable/local'
const transaltion: Plugin = {
  install: (app) => {
    const { getLang } = useLocal()
    const transalte = (keys: string): string => {
      return (
        keys.split('.').reduce((acc: Record<string, any>, current: string) => {
          if (acc) return acc[current]
        }, lang)?.[getLang.value] ?? keys
      )
    }
    app.config.globalProperties.$translate = transalte
  }
}
export default transaltion
