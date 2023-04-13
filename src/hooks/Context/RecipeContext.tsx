import React,{createContext} from "react";
import { RecipeContextType } from "../../types/RecipeContextType";

const RecipeContext=createContext<RecipeContextType>(null as any);
export default RecipeContext;