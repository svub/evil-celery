import { Drivers, Storage } from '@ionic/storage';

export const store = new Storage({
  name: 'diet',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});
await store.create();