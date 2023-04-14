export default interface DrinkRecipes {
    id: number;
    title: string;
    category: string;
    isAlcoolic: boolean;
    glass: string;
    instructions: string;
    image: string;
    ingredients: string[];
}