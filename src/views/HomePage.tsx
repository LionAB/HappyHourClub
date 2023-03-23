import React, { useEffect, useState } from "react";

import CocktailCard from "../Components/CocktailCard/CocktailCard";
import Drink from "../Models/Drink";

export default function HomePage() {

    const [drink, setDrink] = useState<Drink | null>(null);
    const [drinks,setDrinks]= useState<Drink[]|null>(null);
    
    useEffect(() => {
        
        setDrinks([{
          id: 1,
          title: "Mojito",
          image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
        },{
            id: 2,
          title: "test",
          image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
        }
    ]);
    }, []);
    

    

    return (
        <div id="home">
            <h1 className="text-3xl text-sky-400 font-bold underline">Home Page</h1>
            {/* <CocktailCard 
            drink={drink}
            /> */}
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