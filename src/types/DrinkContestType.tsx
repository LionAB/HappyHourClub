import Drink from "../Models/Drink";
export type DrinkContestType = {
    fetchAlcoholic: () => void;
    fetchNonAlcoholic: () => void;
    fetchBeer: () => void;
    fetchCoffee: () => void;
    fetchPunch: () => void;
    fetchShaker: () => void;
    drinks: Drink[];
};