import React, { useContext } from'react';
import "./CocktailCard.css"
import Drinks from "../../Models/Drink";
import RecipeContext from '../../hooks/Context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import DrinkContext from '../../hooks/Context/DrinkContext';

export default function CocktailCard(props:{isnodrink:boolean|undefined,drink: Drinks | null}){
    const {fetchDrinkById}=useContext(RecipeContext);
    const {fetchAlcoholic,fetchBeer,fetchCoffee,fetchNonAlcoholic,fetchPunch,fetchShaker}=useContext(DrinkContext);
    const {drink,isnodrink} = props;
    const navigate= useNavigate();
    const handleDrinkClick = (id:number|undefined) => {
        if (isnodrink){
            if (id !==undefined){
                const stringId= id.toString()
                switch (stringId) {
                    case "1":
                      fetchAlcoholic();
                      break;
                    case "2":
                      fetchNonAlcoholic();
                      break;
                    case "3":
                      fetchPunch();
                      break;
                    case "4":
                      fetchBeer();
                      break;
                    case "5":
                      fetchShaker();
                      break;
                    case "6":
                      fetchCoffee();
                      break;
                    default:
                      break;
                  }
                  
                  navigate("/");
            }
        }else{
            if (id !==undefined){
            const stringId= id.toString()
            fetchDrinkById(stringId);
            navigate("/recipe")
        }  
        }
      };

    return(
        //Si il n"y a pas de boisson on affiche les catégories sinon on affiche les boisson de la catégorie
        <>
        {isnodrink ? 
        (<><div key={drink?.id}  className="card-container card-layout__item " onClick={()=>handleDrinkClick(drink?.id)}>
        <div className="card-image-container">
            <img src={drink?.image}/>
        </div>
        <div className="cocktail-card-title">
            <h1 className='cocktail-name'>{drink?.title}</h1>
        </div>
    </div></>):
        ( <><div key={drink?.id}  className="card-container card-layout__item " onClick={()=>handleDrinkClick(drink?.id)}>
            <div className="card-image-container">
                <img src={drink?.image}/>
            </div>
            <div className="cocktail-card-title">
                <h1 className='cocktail-name'>{drink?.title}</h1>
            </div>
        </div></>)}
       
        </>
    )
}


