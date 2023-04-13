import React, { useState } from "react";
import DrinkRecipes from "../Models/DrinkRecipes";
import RecipeContext from  "../hooks/Context/RecipeContext"

export const RecipeProvider:React.FC<{children?:React.ReactElement | React.ReactElement[];}>=(props)=>{
    const [recipe,setRecipe]=useState<DrinkRecipes |null>(null);
    const fetchDrinkById=async()=>{
        
    }
    return(
        <RecipeContext.Provider value={{fetchDrinkById}} >
            {props.children}
        </RecipeContext.Provider>
    )
}