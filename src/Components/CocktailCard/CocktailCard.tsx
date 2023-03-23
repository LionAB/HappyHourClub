import React from'react';
import "./CocktailCard.css"
import Drinks from "../../Models/Drink";


export default function CocktailCard(props: {drink: Drinks | null}){

    const {drink} = props;

    return(
        <div key={drink?.id} className="card-container">
            <div className="card-image">
                <img src={drink?.image}/>
            </div>
            <div className="cocktail-card-title">
                <h1>{drink?.title}</h1>
            </div>
        </div>
    )
}