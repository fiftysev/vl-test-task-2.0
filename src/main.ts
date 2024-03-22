import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/main.scss';

const app = createApp(App);

app.use(router);

console.log(import.meta.env)

app.mount('#app');
