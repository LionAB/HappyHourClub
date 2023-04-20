import  { useContext } from "react";
import Recipe from "../Components/Layout/Recipe";
import RecipeContext from "../hooks/Context/RecipeContext";

export default function RecipePage(){
    const {recipe}=useContext(RecipeContext)
    return(
        <Recipe  recipe={recipe[0]}></Recipe>
        
    )
}