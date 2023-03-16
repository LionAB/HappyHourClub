import React from'react';
import "./CocktailCard.css"

export default function CocktailCard(){
    return(
        <div className="card-container">
            <div className="card-image">
                <img src="https://i.imgflip.com/7eplof.jpg" />
            </div>
            <div className="cocktail-card-title">
                <h1>CocktailCard</h1>
            </div>
            <div className="card-cocktail-description">
                <p>Blublubblublu bblubblulubbbublbu bubbubl bubblubublub</p>
            </div>
        </div>
    )
}