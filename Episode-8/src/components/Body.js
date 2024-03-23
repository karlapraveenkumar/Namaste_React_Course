import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=> {
    const [ListofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState();

    const[SearchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //console.log(json);
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>
            Look like you're in offline, please check your internet connection.
        </h1>
    }

    // Conitional Rendering

    return ListofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" className="search-input" placeholder="search anything" 
                        value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}
                    >
                    </input>

                    <button onClick={()=>{
                        const filteredRestaurants = ListofRestaurants.filter((res => 
                            res.info.name.toLowerCase().includes(SearchText.toLocaleLowerCase())));

                        setfilteredRestaurants(filteredRestaurants);
                        
                    }} className="search-btn">Search</button>
                </div>

                <button onClick= {()=>{
                    const updatedList = ListofRestaurants.filter(res=> res.info.avgRating >4.3)
                    setListofRestaurants(updatedList);
                }} className="filter-btn">Top Rated Restaurants
                </button>


            </div>
            
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    ) )
                }
            </div>
        </div>
    )
}

export default Body;