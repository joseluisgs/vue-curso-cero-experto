import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Mis estilos css o sass
import '@/assets/styles/main.css'

// Validación del geolocalización
if (!navigator.geolocation) {
  alert('Tu navegador no soporta geolocalización')
  throw new Error('Geolocation is not supported by your browser')
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
