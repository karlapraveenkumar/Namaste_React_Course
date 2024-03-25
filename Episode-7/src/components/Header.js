import { useEffect, useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";


const Header = ()=>{
    const [Btnname, setBtnname] = useState("Login");

    console.log("Header rendered")
    useEffect(()=>{
        console.log("UseEffect called");    
    },[Btnname]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
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

                    <button onClick={()=>{
                        Btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
                    }} className="login">{Btnname}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;