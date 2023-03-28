import DirectivesPlugin from '@/plugins/directives'
import TranslationPlugin from '@/plugins/translation'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(DirectivesPlugin)
app.use(TranslationPlugin)

app.use(createPinia())
app.use(router)

app.mount('#app')
