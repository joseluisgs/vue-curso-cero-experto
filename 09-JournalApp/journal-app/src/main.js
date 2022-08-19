import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import UserStore from '@/stores/users'

// Mis estilos css o sass
import '@/assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// si queremos forzar que siempre sté logueado como situviese una sesion!
const userStore = new UserStore()
await userStore.logIn()

app.mount('#app')

