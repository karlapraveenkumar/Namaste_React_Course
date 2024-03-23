import { useEffect, useState} from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{
    const [Btnname, setBtnname] = useState("Login");

    const onlineStatus = useOnlineStatus();


    useEffect(()=>{  
    },[Btnname]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <button onClick={()=>{
                        Btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
                    }} className="login">{Btnname}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;