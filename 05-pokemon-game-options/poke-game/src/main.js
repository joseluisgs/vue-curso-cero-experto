import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

// Por si usamos pinia!!!
app.use(createPinia())

app.mount('#app')
