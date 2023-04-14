import {Box, Grid, Paper } from "@mui/material";

import React, { useContext } from "react";
import Recipe from "../Components/Layout/Recipe";
import RecipeContext from "../hooks/Context/RecipeContext";
import DrinksRecipes from "../Models/DrinkRecipes";

export default function RecipePage(){
    const {recipe}=useContext(RecipeContext)
    return(
        <Recipe recipe={recipe[0]}></Recipe>
        
    )
}