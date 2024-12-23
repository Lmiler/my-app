import ExpenseItem from "./ExpenseItem"
import {useEffect, useState} from 'react'

function Expenses() {
    const [games , setGames] = useState([]);
    
    useEffect (() => {
    
      const fetchGames = async () => {
    
        try{
        const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=100");
        const jsonData = await response.json();
        setGames (jsonData);
      }
      catch (error){
        // console.error(error);
      }
    }
    fetchGames();
    
      },[]);
    

    return (

        <div>
            {games.map((item, index) => (
                <ExpenseItem
                title={item.title}
                releaseDate={item.releaseDate}
                cover={item.thumb}
                key={index}
                />
            ))}


        </div>

    )
}

export default Expenses