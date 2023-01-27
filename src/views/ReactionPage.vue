<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reaction</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reaction</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-radio-group v-model="severity">
        <ion-item>
          <ion-label>High</ion-label>
          <ion-radio slot="end" :value="1" color="danger"></ion-radio>
        </ion-item>

        <ion-item>
          <ion-label>Medium</ion-label>
          <ion-radio slot="end" :value=".5" color="warning"></ion-radio>
        </ion-item>

        <ion-item>
          <ion-label>Low</ion-label>
          <ion-radio slot="end" :value=".125"></ion-radio>
        </ion-item>
      </ion-radio-group>

      <ion-button @click="report()">Report</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useReactions } from '@/store/reactions';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup, IonLabel, IonItem, IonButton } from '@ionic/vue';
import { ref } from 'vue';

const reactions = useReactions();
const severity = ref(.5);

function report() {
  reactions.addReaction({
    dt: new Date().toISOString(),
    severity: severity.value,
  });
}
</script>
