import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
<<<<<<< HEAD
    //console.log(resData);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
    return (
        <div data-testid="resCard" className="p-4 m-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200" >
=======


    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
    return (
        <div className="p-4 m-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200" >
>>>>>>> f76f22b03b158cde3c92c6796e042d00c4b3d009
            <img className="rounded-lg" alt="res-logo" 
            src={
                    CDN_URL + cloudinaryImageId
                }
            />
            <h3 className="font-bold py-4 text-m">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}


// Higher order component
// Input is RestaurantCard => output is RestaraurantCardPromoted
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;