import { api } from "./api";
import { Recipe } from "./../types/Recipe";
//GET ALL
export async function getRecipesAll() {
  const response = await api.get<Recipe[]>("/recipes");
  return response.data;
}
// GET ID
export async function getRecipeId(id: number) {
  const response = await api.get<Recipe>(`/recipes/${id}`);
  return response.data;
}
//POST
export async function createRecipe(recipe: Omit<Recipe, "id">) {
  const response = await api.post<Recipe>("/recipe", recipe);
  return response.data;
}
//PUT
export async function updateRecipe(id: string, recipe: Omit<Recipe, "id">) {
  const response = await api.put<Recipe>(`/recipe/${id}`, recipe);
  return response.data;
}
//DELETE
export async function deleteRecipe(id: string) {
    await api.delete(`/recipe/${id}`)
    
}

