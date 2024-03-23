import { useContext, useEffect, useState} from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = ()=>{
    const [Btnname, setBtnname] = useState("Login");

    const onlineStatus = useOnlineStatus();


    useEffect(()=>{  
    },[Btnname]);

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-[38%]" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-4"    >
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <button onClick={()=>{
                        Btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
                    }} className="px-4">{Btnname}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;