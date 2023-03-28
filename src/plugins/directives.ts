import { BlurDirective, BoldDirective } from '@/utils/directives'
import type { Plugin } from 'vue'
const customDirectivePlugin: Plugin = {
  install: (app, options) => {
    app.directive('bold', BoldDirective)
    app.directive('blur', BlurDirective)
  }
}

export default customDirectivePlugin
