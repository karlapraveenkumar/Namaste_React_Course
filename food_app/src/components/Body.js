import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";


const Body = ()=> {
    const [ListofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState();


    const [whatinMind, setWhatinMind] = useState([]);

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

        const json = await data?.json();
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data);
        setWhatinMind(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>
            Look like you're in offline, please check your internet connection.
        </h1>
    }

    // Conitional Rendering

    return ListofRestaurants?.length == 0 ? <Shimmer/> : (
        <div className="h-auto md:h-auto">
            <div className="filter flex-row md:flex  md:ml-auto md:justify-center md:items-center">
                <div className="p-4 mx-14 md:mx-0">
                    <input 
                        data-testid="searchInput"
                        type="text" className="border border-solid rounded-lg md:m-2 md:p-2 border-black focus:outline-none focus:ring-2 focus:ring-purple-600 " 
                        placeholder="search anything" 
                        value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}
                    >
                    </input>

                    <button onClick={()=>{
                        const filteredRestaurants = ListofRestaurants?.filter((res => 
                            res?.info?.name?.toLowerCase()?.includes(SearchText.toLocaleLowerCase())));

                        setfilteredRestaurants(filteredRestaurants);
                        
                    }} className="px-4 md:py-2 md:m-4 bg-green-100 hover:bg-green-200 rounded-lg focus:ring-2 focus:ring-blue-500 ring-offset-2 focus:ring-opaciy-50 focus:outline-none">Search</button>
                </div>
                
                <div className="flex items-center mx-14 md:mx-0">
                    <button onClick= {()=>{
                        const updatedList = ListofRestaurants?.filter(res=> res?.info?.avgRating > 4.5)
                        setfilteredRestaurants(updatedList);
                    }} className="px-4 ml-4 md:ml-0 md:py-2 md:m-4 bg-green-100 hover:bg-green-200 rounded-lg focus:ring-2 focus:ring-blue-500 ring-offset-2 focus:ring-opaciy-50 focus:outline-none">
                        Top Rated Restaurants
                    </button>
                </div>

                <div className=" flex items-center my-2 md:my-0 mx-14 md:mx-0">
                    <label className="px-2 py-2 md:m-4">UserName : </label>
                    <input className="border border-black rounded-lg md:p-2 md:m-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." 
                        value = {loggedInUser} onChange={(e)=>(setuserName(e.target.value))}></input>
                </div>

            </div>

            <div className="shadow-sm mx-14 mb-10">
                <h1 className="font-bold text-2xl mx-14 ">What's on your mind?</h1>
                <div className=" flex overflow-x-scroll mx-14">
                    {
                        whatinMind?.map((item)=> (
                            <img alt="item name" className="rounded-lg w-[144px] h-[180px] cursor-pointer" 

                                src= {
                                    CDN_URL + item?.imageId
                                }
                                key={item?.id} 
                            />
                        ))
                    }

                </div>
            </div>
            
            <div className=" mx-14 m-10">
                <h1 className="font-bold text-2xl mx-14">Restaurants with online food delivery in Hyderabad</h1>
                <div className="flex flex-wrap justify-center items-center">
                    {
                    
                        filteredRestaurants?.map((restaurant) => (
                        <Link 
                            key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}
                        >
                            {restaurant?.info?.avgRating > 4.3 ? (
                                <RestaurantCardPromoted resData={restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant}/>
                            )}
                            
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body;