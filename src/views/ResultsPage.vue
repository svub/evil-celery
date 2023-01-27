<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Results</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Results</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Stats</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <p>Meals {{ meals.count }}</p>
          <p>Reactions {{ reactions.count }}</p>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Ingrediences</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-segment v-model="sorting">
            <ion-segment-button v-for="option in sortingOptions" :key="option" :value="option">
              <ion-label>
                {{ option }}
              </ion-label>
            </ion-segment-button>
          </ion-segment>
          <results-table :results="results" :sort="sorting"></results-table>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { watchEffect } from 'vue';
import { useMeals } from '@/store/meals';
import { useReactions } from '@/store/reactions';
import { scoreResults } from '@/modules/scoreResults';
import ResultsTable from '@/components/ResultsTable.vue';
import { Result, ResultSorting } from '@/types/results';
import { ref } from 'vue';

const meals = useMeals();
const reactions = useReactions();
const results = ref([] as Result[]);
const sortingOptions = Object.values(ResultSorting);
const sorting = ref(ResultSorting.score);

watchEffect(() => {
  results.value = scoreResults(meals.list, reactions.list, 12);
  console.log(results);
});

watchEffect(() => console.log(sorting.value));
</script>

