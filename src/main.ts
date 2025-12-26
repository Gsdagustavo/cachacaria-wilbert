import { createApp } from 'vue'
import App from './App.vue'

import router from '@/config/navigation.ts'

const app = createApp(App)
app.use(router)
app.mount('#app')
