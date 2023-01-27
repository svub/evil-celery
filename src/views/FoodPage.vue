<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Enter a meal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Enter a meal</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="(ingredience, index) of ingrediences" :key="index" :class="`index${index}`">
          <ion-input placeholder="Enter ingredience" v-model="ingrediences[index]" @ion-change="changed(index)"></ion-input>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="done()">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonFab, IonFabButton, IonIcon, IonInput } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { ref } from 'vue';
import { useMeals } from '@/store/meals';

const ingrediences = ref(['']);

function changed(index: number) {
  if (index >= ingrediences.value.length -1) ingrediences.value.push('');
}

async function done() {
  // const meals = (await store.get('meals') ?? []) as Meal[];
  // meals.push({
  //   dt: new Date(),
  //   ingrediences: ingrediences.value,
  // });
  // store.set('meals', meals);
  useMeals().addMeal({
    dt: new Date().toISOString(),
    ingrediences: ingrediences.value,
  });
}
</script>
