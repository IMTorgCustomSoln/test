import Vue, { createApp, configureCompat  } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import App from './components/App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
const app = createApp(App);
const root = app.mount('#app');