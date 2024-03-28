import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import  {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = ()=>{

    const dispatch = useDispatch();

    const[isSignInForm , setIsSignInForm] = useState(true);
    const[errorMessage, seterrorMessage] = useState(null);


    const email = useRef(null);
    const password = useRef(null);
    const name=  useRef(null);

    const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message)

        if(message) return

        // SignUp and SignIn Logic

        if(!isSignInForm){
            // SignUp Logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                        })
                        .then(() => {
                            // Profile updated!
                            // auth is the new updated value from firebase (and in Store)
                            // here user not updated with displayName and photoURL
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid:uid,
                                    email:email,
                                    displayName:displayName,
                                    photoURL:USER_AVATAR
                                })
                            );                          
                            //navigate("/browse"); changed this logic to header
                        })
                        .catch((error) => {
                            // An error occurred
                            seterrorMessage(error.message);
                        });                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode +"-"+ errorMessage);
                });

        }else{
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    //navigate("/browse"). we have changed logic to header
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                });

        }
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div className="w-screen">
            <Header/>
            <div className="absolute w-screen">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background_image" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black w-3/12 p-12 mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
                
                <h1 className="font-bold text-white text-3xl my-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700"/>}
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
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-red-400 font-bold text-lg py-2">{errorMessage}</p>

                <p className="py-6 cursor-pointer hover:underline" 
                    onClick={toggleSignInForm}
                >
                    {isSignInForm ? "New to Netflix? SignUp Now" : "Already registered? SignIn Now"}
                </p>
            </form>
        </div>
    )   
}
export default Login;