import React, { useContext } from'react';
import "./CocktailCard.css"
import Drinks from "../../Models/Drink";
import RecipeContext from '../../hooks/Context/RecipeContext';
import { useNavigate } from 'react-router-dom';

export default function CocktailCard(props: {drink: Drinks | null}){
    const {fetchDrinkById}=useContext(RecipeContext);
    const {drink} = props;
    const navigate= useNavigate();
    const handleDrinkClick = (id:number|undefined) => {
        if (id !==undefined){
            const stringId= id.toString()
            fetchDrinkById(stringId);
            navigate("/recipe")
            
            
        }
      };

    return(
        <div key={drink?.id} className="card-container card-layout__item " onClick={()=>handleDrinkClick(drink?.id)}>
            <div className="card-image">
                <img src={drink?.image}/>
            </div>
            <div className="cocktail-card-title">
                <h1 className='text-4xl'>{drink?.title}</h1>
            </div>
        </div>
    )
}


