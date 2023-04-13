import React, {useState, useContext, KeyboardEventHandler} from 'react'
import DrinkContext from '../../hooks/Context/DrinkContext'

export default function SearchBar() {

    const {fetchDrinkSearch} = useContext(DrinkContext)
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        fetchDrinkSearch(searchInput);
      };
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
          handleSearch();
        }
      };

    return (
        <div>
            <input type="text" placeholder="Search" 
            onChange={(event)=>setSearchInput(event.target.value)} 
            onKeyDown={handleKeyDown}>
            </input>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}