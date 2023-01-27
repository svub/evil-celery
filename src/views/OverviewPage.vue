<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Evil Celery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Evil Celery</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="hero">
        <img src="/assets/celery.png" alt="The fruit of the devil.">
      </div>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Stats</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <p>Meals {{ meals.count }}</p>
          <p>Reactions {{ reactions.count }}</p>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useMeals } from '@/store/meals';
import { useReactions } from '@/store/reactions';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/vue';

const meals = useMeals();
const reactions = useReactions();
</script>

<style>
main {
  display: flex;
  flex-direction: column;
}

ion-grid {
  height: 100%;
}

.hero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
}
</style>