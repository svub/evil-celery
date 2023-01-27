import { Reaction } from "@/types/reactions";
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useReactions = defineStore('reactions', () => {
  const list = ref([] as Reaction[]);
  const count = computed(() => list.value.length);
  function addReaction(reaction: Reaction) {
    list.value.push(reaction);
  }

  return { list, count, addReaction }
})