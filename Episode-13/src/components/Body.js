import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=> {
    const [ListofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState();

    const[SearchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const {setuserName, loggedInUser} = useContext(UserContext);

    //console.log(ListofRestaurants);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
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
            <div className="filter flex">
                <div className="p-4 m-0">
                    <input 
                        data-testid="searchInput"
<<<<<<< HEAD
                        type="text" className="border border-solid border-black focus:outline-none focus:ring-2 focus:ring-purple-600 " 
                        placeholder="search anything" 
=======
                        type="text" className="border border-solid border-black" placeholder="search anything" 
>>>>>>> 3a35c1003b01781f96c2ac633f9045a982891463
                        value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}
                    >
                    </input>

                    <button onClick={()=>{
                        const filteredRestaurants = ListofRestaurants.filter((res => 
                            res.info.name.toLowerCase().includes(SearchText.toLocaleLowerCase())));

                        setfilteredRestaurants(filteredRestaurants);
                        
                    }} className="px-4 py-2 m-4 bg-green-100 hover:bg-green-200 rounded-lg focus:ring-2 focus:ring-blue-500 ring-offset-2 focus:ring-opaciy-50 focus:outline-none">Search</button>
                </div>
                
                <div className="flex items-center">
                    <button onClick= {()=>{
                        const updatedList = ListofRestaurants.filter(res=> res.info.avgRating > 4.5)
                        setfilteredRestaurants(updatedList);
<<<<<<< HEAD
                    }} className="px-4 py-2 m-4 bg-green-100 hover:bg-green-200 rounded-lg focus:ring-2 focus:ring-blue-500 ring-offset-2 focus:ring-opaciy-50 focus:outline-none">
=======
                        setListofRestaurants(updatedList);
                    }} className="px-4 py-2 m-4 bg-gray-100 rounded-lg">
>>>>>>> 3a35c1003b01781f96c2ac633f9045a982891463
                        Top Rated Restaurants
                    </button>
                </div>

                <div className=" flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black ml-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." 
                        value = {loggedInUser} onChange={(e)=>(setuserName(e.target.value))}></input>
                </div>


            </div>
            
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link 
                            key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}
                        >
                            {restaurant.info.avgRating > 4.3 ? (
                                <RestaurantCardPromoted resData={restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant}/>
                            )}
                            
                        </Link>
                    ) )
                }
            </div>
        </div>
    )
}

export default Body;
