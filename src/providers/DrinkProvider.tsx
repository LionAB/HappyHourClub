import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Drink from '../Models/Drink';
import DrinkContext from '../hooks/Context/DrinkContext';
import axios from 'axios';

export const DrinkProvider: React.FC<{ children?:React.ReactElement | React.ReactElement[]; }>=(props) => {
    
    const navigate= useNavigate();
    
    // const [drinks, setDrinks] = useState<Drink[]>([]);
    
    const fetchAlcoholic = async () => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
            const data = response.data;
            console.log(data);
          /*   const drinksApiData = data.drinks.map((dataDrink: any) => ({
                id: parseInt(dataDrink.idDrink),
                image: dataDrink.strDrinkThumb,
                title: dataDrink.strDrink,
            }));*/
        } catch (error) {
            console.error('Unable to fetch drinks', error);
        }

};

    return ( 
        <DrinkContext.Provider value={{fetchAlcoholic }}>
            {props.children}
        </DrinkContext.Provider>
    );

}
