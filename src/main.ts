import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import withUUID from 'vue-uuid'

const app = withUUID(createApp(App))

app.use(router)

app.mount('#app')
