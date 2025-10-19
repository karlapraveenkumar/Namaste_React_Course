import { useState } from "react";
import ItemList from "./ItemList";
import MenuShimmer from "./MenuShimmer";

const RestaurantCategory = ({data, showItems,setshowIndex})=>{


    const handleClick = ()=>{
        setshowIndex();
        //toggleCategory();
    }
    return <div>

        {/* Accordion Header */}
        <div className="bg-green-50 w-6/12 mx-auto my-4 p-4 shadow-lg ">
            <div 
                className="flex justify-between cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-bold text-lg">{data.title} {data.itemCards.length} </span>
                <span>{showItems ? "🔽" : "🔼"}</span>
            </div>

            { showItems && <ItemList items= {data.itemCards}/>}


        </div>

        
    </div>
}

export default RestaurantCategory;