import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Drink from '../Models/Drink';
import DrinkContext from '../hooks/Context/DrinkContext';
import axios from 'axios';

export const DrinkProvider: React.FC<{ children?: React.ReactElement | React.ReactElement[]; }> = (props) => {

    const navigate = useNavigate();

    const [drinks, setDrinks] = useState<Drink[]>([]);

/********************************************************************************/

    const fetchAlcoholic = async () => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");

            const drinksApiData = await mapDrinkApiData(response);

            setDrinks(drinksApiData);
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }
    };

/********************************************************************************/

    const fetchNonAlcoholic = async () => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
            
            const drinksApiData = await mapDrinkApiData(response);

            setDrinks(drinksApiData);
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }
    };

/********************************************************************************/

    const fetchBeer = async () => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer");
            
            const drinksApiData = await mapDrinkApiData(response);

            setDrinks(drinksApiData);
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }
    };

/********************************************************************************/
    
    const fetchCoffee = async () => {

        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee / Tea");
            
            const drinksApiData = await mapDrinkApiData(response);

            setDrinks(drinksApiData);
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }
    };

/********************************************************************************/

    const fetchPunch = async () => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch / Party Drink");
            
            const drinksApiData = await mapDrinkApiData(response);

            setDrinks(drinksApiData);
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }
    }

/********************************************************************************/

    const fetchShaker = async () => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake");
            
            const drinksApiData = await mapDrinkApiData(response);

            setDrinks(drinksApiData);
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }
    }

    return (
        <DrinkContext.Provider value={{
            drinks, 
            fetchAlcoholic, 
            fetchNonAlcoholic, 
            fetchBeer,
            fetchCoffee, 
            fetchPunch,
            fetchShaker
        }}>
            {props.children}
        </DrinkContext.Provider>
    );

}

/********************************************************************************/

const mapDrinkApiData = async (response: any): Promise<[Drink]> => {
    
    const data = response.data;

    const apidataDrink = data.drinks.map((dataDrink: any) => ({
        id: parseInt(dataDrink.idDrink),
        image: dataDrink.strDrinkThumb,
        title: dataDrink.strDrink,
    }))

    return apidataDrink;
};