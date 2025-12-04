import { createApp } from 'vue'
import './style.css' // Nuestro CSS global (variables de colores)
import 'bootstrap/dist/css/bootstrap.min.css' // 👈 Bootstrap CSS puro
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // 👈 Bootstrap JS (interacciones)
import 'bootstrap-icons/font/bootstrap-icons.css' // 👈 Bootstrap Icons

import App from './App.vue'
import router from './router' // Importamos el router

const app = createApp(App)

app.use(router) // Usamos el router
app.mount('#app')