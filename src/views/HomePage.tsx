import React from "react";

import CocktailCard from "../Components/CocktailCard/CocktailCard";
export default function HomePage() {
    return (
        <div id="home">
            <h1 className="text-3xl text-sky-400 font-bold underline">Home Page</h1>
            <CocktailCard/>
        </div>
    );
}