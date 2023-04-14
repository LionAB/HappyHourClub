import DrinkRecipes from "../Models/DrinkRecipes";
export type RecipeContextType={
    fetchDrinkById:(id:string)=>void;
    recipe:DrinkRecipes[];
};