import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = ()=>{
    const[isSignForm , setIsSignForm] = useState(true);
    const[errorMessage, seterrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name=  useRef(null);

    const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message)
    }
    const toggleSignInForm = ()=>{
        setIsSignForm(!isSignForm);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background_image" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black w-3/12 p-12 mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
                
                <h1 className="font-bold text-white text-3xl my-4">{isSignForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700"/>}
                <input
                    ref={email}
                    type="text" placeholder="Email or phone number" className="p-2 my-4 w-full bg-gray-700"/>

                <input
                    ref={password}
                    type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>

                <button 
                    className="p-2 my-6 bg-red-700  hover:bg-red-800 text-white text-sm font-bold w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-red-400 font-bold text-lg py-2">{errorMessage}</p>

                <p className="py-6 cursor-pointer hover:underline" 
                    onClick={toggleSignInForm}
                >
                    {isSignForm ? "New to Netflix? SignUp Now" : "Already registered? SignIn Now"}
                </p>
            </form>
        </div>
    )   
}
export default Login;