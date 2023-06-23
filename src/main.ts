import DirectivesPlugin from '@/plugins/directives'
import TranslationPlugin from '@/plugins/translation'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
app.use(DirectivesPlugin)
app.use(TranslationPlugin)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
