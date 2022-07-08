import { createApp } from 'vue';
import App from './App.vue';
import { Store } from 'vuex';
import Toast from 'vue-toastification';
import dotenv from 'dotenv';


dotenv.config();

import "vue-toastification/dist/index.css";

// Packages
import router from './router';
import store from './store';


// Components
import AppWrapper from './components/UI/AppWrapper.vue';
import AppRow from './components/UI/AppRow.vue';
import AppCol from './components/UI/AppCol.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseModal from './components/UI/BaseModal.vue';
import BaseInput from './components/UI/BaseInput.vue';


const app = createApp(App);

// Usages
app.use(router);
app.use(store);
app.use(Toast, {});

// Components
app.component('app-wrapper', AppWrapper);
app.component('app-row', AppRow);
app.component('app-col', AppCol);
app.component('base-button', BaseButton);
app.component('base-modal', BaseModal);
app.component('base-input', BaseInput);

app.mount('#app');

// v17.8.0 v8.5.5


// $stores access
declare module '@vue/runtime-core' {
  // declare your own stores states
  interface State {
    count: number
  }

  // provide typings for `this.$stores`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}