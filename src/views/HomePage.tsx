import React, { useState } from "react";

import CocktailCard from "../Components/CocktailCard/CocktailCard";
import Drinks from "../Models/Drinks";

export default function HomePage() {

    const [drink, setDrink] = useState<Drinks | null>(null);

    setDrink({
        id: 1,
        title: "Mojito",
        image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg"
    });

    return (
        <div id="home">
            <h1 className="text-3xl text-sky-400 font-bold underline">Home Page</h1>
            <CocktailCard 
            drink={drink}
            />
        </div>
    );
}