import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Mis estilos css
import '@/assets/styles/main.css'

// Mis estilos scss
import '@/assets/styles/styles.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
