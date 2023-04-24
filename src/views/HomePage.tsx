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

    const { user } = useContext(UserContext);
    const { drinks } = useContext(DrinkContext);
  

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