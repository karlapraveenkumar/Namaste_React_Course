import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = ()=> {
    const [ListofRestaurants, setListofRestaurants] = useState([]);
    //const[filteredRestaurants, setfilteredRestaurants] = useState([]);
    //const[SearchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    
    return (
        <div className="body">
            <div className="filter">
                {/****
                <div className="search">
                    <input type="text" placeholder="search anything" value={SearchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}>
                    </input>

                    <button onClick={()=>{
                        const filteredRestaurants = ListofRestaurants.filter((res => 
                            res.info.name.toLowerCase().includes(SearchText.toLocaleLowerCase())));
                        setfilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>
                 * 
                 */}


                <button onClick= {()=>{
                    const updatedList = ListofRestaurants.filter(res=> res.info.avgRating >4.3)
                    setListofRestaurants(updatedList);
                }} className="filter-btn">Top Rated Restaurants</button>

            </div>
            <div className="res-container">
                {
                    ListofRestaurants.map((restaurant) => (
                        <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
                    ) )
                }
            </div>
        </div>
    )
}

export default Body;