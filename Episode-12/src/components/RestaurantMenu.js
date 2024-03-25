import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{


    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const[showIndex, setshowIndex] = useState(null);
    /*
    const toggleCategory = (index) =>{
        setshowIndex(showIndex === index ? null : index)
    } */

    if(resInfo===null) return<Shimmer/>;

    const {name, costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const test = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

    const {itemCards} = (test.cards.length > 4) ? (test?.cards[4]?.card?.card) : (test.cards[1]?.card?.card?.categories[0]);


    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return (
        <div className = "text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {categories.map((category, index)=>(
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data = {category?.card?.card} 
                    showItems = {(index===showIndex)}
                    //showIndex is currently opened category and index is which the clicking category
                    setshowIndex = {()=>setshowIndex(index===showIndex ? null :index)}
                    //toggleCategory = {()=>toggleCategory(index)}
                />
            ))}

        </div>
    );
}
export default RestaurantMenu;