import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// if (process.env.NODE_ENV == 'development') {
//   console.log('development');
//   App.config.devtools = true;
// } else {
//   console.log('not development');
//   App.config.devtools = false;
// }

createApp(App).use(store).use(router).mount('#app')
