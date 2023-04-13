import React, { useState } from "react";
import DrinkRecipes from "../Models/DrinkRecipes";
import RecipeContext from  "../hooks/Context/RecipeContext"
import axios from "axios";

export const RecipeProvider:React.FC<{children?:React.ReactElement | React.ReactElement[];}>=(props)=>{
    const [recipe,setRecipe]=useState<DrinkRecipes[]>([]);
    
    const fetchDrinkById=async(id:string)=>{
        try{
            const response =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const drink=response.data.drinks[0]
            const ingredients = [];
            const measures = [];
            const finalingredients=[];
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];
                

            
                // Only push non-null values
                if (ingredient) {
                  ingredients.push(ingredient);
                }
                if (measure) {
                  measures.push(measure);
                }

            

              }
              for (let i = 0; i < ingredients.length; i++) {
                let drink = measures[i] + ": " + ingredients[i];
                finalingredients.push(drink);
            }
              const recipe: DrinkRecipes = {
                id: drink.idDrink,
                title: drink.strDrink,
                category: drink.strCategory,
                isAlcoolic: drink.strAlcoholic === "Alcoholic",
                glass: drink.strGlass,
                instructions: drink.strInstructions,
                image: drink.strDrinkThumb,
                ingredients: finalingredients,
              };
          
              setRecipe([recipe]);

              console.warn(recipe);
          
        }catch (error) {
            console.error('Unable to fetch recipe', error);
        } 
    }

    return(
        <RecipeContext.Provider value={{
            fetchDrinkById,
            recipe,
            }} >
            {props.children}
        </RecipeContext.Provider>
    )
}