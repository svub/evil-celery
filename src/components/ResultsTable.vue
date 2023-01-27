<template>
  <ion-list>
    <ion-item v-for="(result, index) of sortedResults" :key="index" :class="`index${index}`">
      <ion-label>
        {{ result.ingredience }}
      </ion-label>
      <ion-note slot="end">
        {{ result.reactions }}x @ {{ result.reactionScore }}
      </ion-note>
      <ion-note slot="end">
        {{ result.noReactions }}x @ {{ result.noReactionScore }}
      </ion-note>
      <ion-note slot="end">
        {{ result.score }}
      </ion-note>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { IonItem, IonList, IonLabel, IonNote } from '@ionic/vue';
import { Result, ResultSorting } from "@/types/results";
import { ref, watchEffect, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  results: Result[],
  sort: ResultSorting,
}>(), {
  results: () => [],
  sort: ResultSorting.score,
});
    
const sorting = ref(props.sort);
const sortedResults = ref(props.results);

watchEffect(() => {
  sortedResults.value = props.results.slice().sort((a, b) => {
    switch (props.sort) {
      case ResultSorting.noReactions: return b.noReactions - a.noReactions;
      case ResultSorting.reactions: return b.reactions - a.reactions;
      case ResultSorting.score: return b.score - a.score;
      default: throw `Sorting "${props.sort}" not implemented! [${ResultSorting.noReactions}, ${ResultSorting.reactions}, ${ResultSorting.score}]`;
    }
  });
});
</script>

<style scoped>
ion-note {
  min-width: 3em;
}
</style>
