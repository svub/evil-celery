import { Meal } from "@/types/meals";
import { defineStore } from "pinia"
import { computed, Ref, ref } from "vue"

export const useMeals = defineStore('meals', () => {
  const list: Ref<Meal[]> = ref([]);
  const count = computed(() => list.value.length);
  function addMeal(meal: Meal) {
    meal.ingrediences = meal.ingrediences.filter(ingredience => !!ingredience);
    list.value.push(meal);
  }

  return { list, count, addMeal }
})