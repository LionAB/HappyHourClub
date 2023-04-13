import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CocktailCard from "../Components/CocktailCard/CocktailCard";
import UserContext from "../hooks/Context/UserContext";
import Drink from "../Models/Drink";
import RecipePage from "./RecipePage";

export default function HomePage() {

    const [drinks,setDrinks]= useState<Drink[]|null>(null);
    const { login } = useContext(UserContext);
    const { user } = useContext(UserContext);
    // Gets the data from thecocktaildb api and adapt it to our model
    useEffect(() => {
      
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
          .then((res) => res.json())
          .then((data) => {
            const drinksApiData = data.drinks.map((dataDrink: any) => ({
              id: parseInt(dataDrink.idDrink),
              image: dataDrink.strDrinkThumb,
              title: dataDrink.strDrink,
            }));
            setDrinks(drinksApiData);
          });
      }, []);

      useEffect(() => {
        console.warn("user :",user);
      }, [user]);

    return (
        <div id="home">
            <h1 className="text-3xl text-sky-400 font-bold underline">Home Page</h1>
            <div><Link to="/recipe">Navigate to Recipe</Link></div>
            <>
            {drinks?.map((mydrink)=>(
                <CocktailCard 
                key={mydrink.id}
                drink={mydrink}
                />
            ))}
            </>
        </div>
    );
}