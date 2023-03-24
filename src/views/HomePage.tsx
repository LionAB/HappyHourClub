import React, { useEffect, useState } from "react";

import CocktailCard from "../Components/CocktailCard/CocktailCard";
import Drink from "../Models/Drink";

export default function HomePage() {

    const [drinks,setDrinks]= useState<Drink[]|null>(null);
    
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

    return (
        <div id="home">
            <h1 className="text-3xl text-sky-400 font-bold underline">Home Page</h1>
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