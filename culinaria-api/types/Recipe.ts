import {DificultFood} from '../components/RecipeCard'

export type Recipe = {
  id: string;
  nameFood: string;
  categoryFood: string;
  dificultFood: DificultFood;
}