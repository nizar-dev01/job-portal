import { createApp } from 'vue'
import App from './App.vue'
import indexPlugin from '@/plugins'

const app = createApp(App)

app.use(indexPlugin)
app.mount('#app')
