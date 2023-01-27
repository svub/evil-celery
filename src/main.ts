import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { createPinia, Store } from 'pinia';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// TODO test if localforage or ionic storage (modules/store) is better; ionic store would mean one dependency less.
import localforage from 'localforage';

// Optional
localforage.config({
  driver: localforage.INDEXEDDB, // This force IndexedDB as the driver
})

async function indexDbPlugin({ store }: { store: Store }) {
  const stored = await localforage.getItem(store.$id + '-state') as string;
  if (stored) {
      store.$patch(JSON.parse(stored))
  }
  store.$subscribe(() => {
    console.log(JSON.stringify(store.$state));
    // localforage.setItem(store.$id + '-state', { ...store.$state }) // Destructure to transform to plain object
    localforage.setItem(store.$id + '-state', JSON.stringify(store.$state)) // Destructure to transform to plain object
  })
}

const pinia = createPinia();
pinia.use(indexDbPlugin);

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);
  
router.isReady().then(() => {
  app.mount('#app');
});