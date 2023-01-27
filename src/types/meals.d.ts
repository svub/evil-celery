export type Ingredience = string;

export type Meal = {
  dt: string, // ISO date string
  ingrediences: Ingredience[],
}