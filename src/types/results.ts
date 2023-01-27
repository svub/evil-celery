export type Result = {
  ingredience: string;
  reactions: number;
  reactionScore: number;
  noReactions: number;
  noReactionScore: number;
  score: number;
}

export enum ResultSorting {
  reactions = "reactions", 
  noReactions = "no reactions", 
  score = "score",
}