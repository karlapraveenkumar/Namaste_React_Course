import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    //console.log(items);

    const dispatch = useDispatch();// dispatch is a function

    const handleAddItem = (item)=>{
        //Dispatch an action
        dispatch((addItem(item)));

    }

    return (
        <div>
            {items.map((item)=>(
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>

                    <div className="w-9/12">
                        <div className=" py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {(item.card.info.price) 
                                ? (item.card.info.price/100)
                                : (item.card.info.defaultPrice/100)}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button onClick={()=>handleAddItem(item)} className="bg-black text-white mx-12 rounded-lg shadow-lg p-2">Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>

                </div>
            ))}
        </div>
    )
}
export default ItemList;