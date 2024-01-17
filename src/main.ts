import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import withUUID from 'vue-uuid'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = withUUID(createApp(App))
app.use(Toast)
app.use(router)

app.mount('#app')
