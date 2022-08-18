import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Mis estilos css o sass
import '@/assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// si queremos forzar que siempre sté logueado como situviese una sesion!
import UserStore from '@/stores/users'

const userStore = new UserStore()
userStore.logIn()
