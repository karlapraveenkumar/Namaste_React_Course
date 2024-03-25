import { useState } from "react";
import resList from "../utils/mockData";

const TopRated = ()=>{
    const[ListofRestaurants, setListofRestaurants] = useState(resList);
    return (
        setListofRestaurants(resList.filter(res => res.info.avgRating >=4.3))
    )
}
export default TopRated;