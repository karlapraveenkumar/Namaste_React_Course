import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { CART_EMPTY_IMAGE } from "../utils/constants";



const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    //console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearcart = ()=>{
        dispatch(clearCart());

    }

    const Totalamount = cartItems.reduce((total, currentItem) => {
        const price = currentItem.card.info.price
          ? currentItem.card.info.price / 100
          : currentItem.card.info.defaultPrice / 100;
        return total + price;
    }, 0);


    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            
            <div className="w-6/12 m-auto p-4">

                <button 
                    className="p-2 m-2 bg-green-500 hover:bg-green-700  text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 ring-offset-2" 
                    onClick={handleClearcart}
                >
                    Clear Cart
                </button>

                {cartItems.length === 0 && <img src={CART_EMPTY_IMAGE}/>}

                <ItemList items={cartItems} />
            </div>
            <h3 className="p-4 font-bold text-xl"> Total Cost : ₹ {Totalamount.toFixed(2)} </h3>
            
        </div>
    );
}
export default Cart;