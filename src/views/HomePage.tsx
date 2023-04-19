import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CocktailCard from "../Components/CocktailCard/CocktailCard";
import SearchBar from "../Components/SearchBar/SearchBar";
import UserContext from "../hooks/Context/UserContext";
import DrinkContext from "../hooks/Context/DrinkContext";
import Drink from "../Models/Drink";
import RecipePage from "./RecipePage";
import { Box } from "@mui/material";

export default function HomePage() {

    // const [drinks,setDrinks]= useState<Drink[]|null>(null);
    const { login } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const { drinks } = useContext(DrinkContext);
    const { fetchAlcoholic } = useContext(DrinkContext);
    const { fetchNonAlcoholic } = useContext(DrinkContext);
    const { fetchBeer } = useContext(DrinkContext);
    const { fetchCoffee } = useContext(DrinkContext);
    const { fetchPunch } = useContext(DrinkContext);
    const { fetchShaker } = useContext(DrinkContext);

    const homedrink = [
      {
        id: 1,
        image: "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
        title: "Alcoholic beverages",
      },{
        id: 2,
        image: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        title: "Non alcoholic beverages",
      },{
        id: 3,
        image: "https://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg",
        title: "Punch",
      },{
        id: 4,
        image: "https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
        title: "Beer Beverages",
      },{
        id: 5,
        image: "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
        title: "Shaker beverages",
      },{
        id: 6,
        image: "https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
        title: "Coffee beverages",
      }
    ]
    // Gets the data from thecocktaildb api and adapt it to our model
/*     useEffect(() => {
      
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
      }, []); */

      useEffect(() => {
        console.warn("user :",user);
      }, [user]);

      useEffect(() => {
        // fetchAlcoholic();
        console.warn("drinks :",drinks);
      }, [drinks]);

    return (

        <Box id="home" sx={{ 
          bgcolor: 'primary.main',
          color: 'text.secondary',
          marginLeft:'3.5rem',
          paddingBottom:'2rem',
        }}>
          <div className="wrapper">
            <img className="logo-home" src="../src/assets/images/Happy-hour-logo-sans-fond.png"/>
          </div>
            
            <SearchBar/>
            
            {drinks.length===0 ? (
              <div className="nodrinks">
                Some good sugestions to start ...
                <div className="cardnodrinks-layout">
                {homedrink?.map((mydrink)=>(
                <CocktailCard 
                  isnodrink={true}
                  key={mydrink.id}
                  drink={mydrink}
                />
            ))}
                </div>
              </div>
            ):(
            <div className="card-layout">
            {drinks?.map((mydrink)=>(
                <CocktailCard 
                isnodrink={false}
                key={mydrink.id}
                drink={mydrink}
                />
            ))}
            </div>
            )}
            
        </Box>
      
    );
}