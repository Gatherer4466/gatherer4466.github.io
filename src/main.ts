import { createApp } from 'vue'
import App from './views/App.vue'
import router from './factories/router'

createApp(App).use(router).mount('#app')
