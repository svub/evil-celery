<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/overview">
          <ion-icon :icon="informationCircleOutline" />
          <ion-label>Overview</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/food">
          <ion-icon :icon="addCircleOutline" />
          <ion-label>Food</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/reaction">
          <ion-icon :icon="closeCircleOutline" />
          <ion-label>Reaction</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/results">
          <ion-icon :icon="checkmarkCircleOutline" />
          <ion-label>Results</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { informationCircleOutline, addCircleOutline, closeCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';
</script>
