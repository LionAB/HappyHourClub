import React, { useState, useContext, KeyboardEventHandler } from 'react'
import './SearchBar.css'

import DrinkContext from '../../hooks/Context/DrinkContext'

export default function SearchBar() {

    const { fetchDrinkSearch } = useContext(DrinkContext)
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
        <div className = "search-bar-container">
            <input className = "search-bar-input" type="text" placeholder="Search"
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyDown={handleKeyDown}>
            </input>
            <button className = "search-bar-button" onClick={handleSearch}>Search</button>
        </div>
    )
}