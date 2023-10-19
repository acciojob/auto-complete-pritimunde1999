import React, { useEffect, useState } from "react";

const SearchItem = () =>{
 
    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

    const[searchedTerm,setSearchedTerm] = useState("");
    const[filteredFruits,setFilteredFruits] = useState(fruits);

    useEffect(()=>{

        setFilteredFruits(fruits.filter(fruit=>fruit.toLowerCase().includes(searchedTerm.toLowerCase())))

    },[searchedTerm])

    return(
        <div>
            <h1>Search Item</h1>
            <input onChange={(e)=>setSearchedTerm(e.target.value)}/>
            <ul>
                {
                    filteredFruits.map((fruit)=>(
                        <li>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
} 

export default SearchItem;