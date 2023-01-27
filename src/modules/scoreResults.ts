import { useMeals, useReactions } from "@/store";
import { Ingredience, Meal } from "@/types/meals";
import { Reaction } from "@/types/reactions";
import { Result } from "@/types/results";
import { inRange } from "lodash";

export function scoreResults(meals: Meal[], reactions: Reaction[], hoursUntilReaction: number): Result[] {  
  const map: Map<string, Result> = new Map();
  
  function getScore(ingredience: Ingredience): Result {
    return map.get(ingredience) ?? {
      ingredience,
      noReactions: 0,
      noReactionScore: 0,
      reactions: 0,
      reactionScore: 0,
      score: 0,
    }
  }
  
  function scoreReaction(ingredience: Ingredience, reaction: Reaction, index = 1) {
    const result = getScore(ingredience);
    const weight = 1 / (index + 1);
    result.reactions++;
    result.reactionScore += weight;
    map.set(ingredience, result);
  }
  
  function scoreNoReaction(ingredience: Ingredience, index = 1) {
    const result = getScore(ingredience);
    const weight = 1 / (index + 1);
    result.noReactions++;
    result.noReactionScore += weight;
    map.set(ingredience, result);
  }
  
  meals.forEach((meal: Meal) => {
    const deltaMillis = hoursUntilReaction * 60 * 60 * 1000;
    const start = new Date(meal.dt).getTime();
    const end = start + deltaMillis;
    const relatedReactions = reactions
      .filter(reaction => inRange(new Date(reaction.dt).getTime(), start, end));
    meal.ingrediences.forEach((ingredience, index) => {
      if (relatedReactions.length > 0) {
        relatedReactions.forEach(reaction => {
          // idea 1: give points for each ingredience when there is a report, points rev proportional to index
          scoreReaction(ingredience, reaction, index);
        });
      } else {
        // idea 2: give negative points to all ingrediences when a meal did not cause a reaction 
        scoreNoReaction(ingredience, index);
      }
    });
  });  

  const results: Result[] = []; 
  for (const result of map.values()) {
    // TODO 
    result.score = result.reactionScore + result.reactions - result.noReactionScore - result.noReactions;
    results.push(result);
  }

  return results.sort((a, b) => b.score - a.score);
}