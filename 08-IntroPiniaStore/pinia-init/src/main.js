import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

// Debemos crear Pinia y usarla en nuestra app
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
