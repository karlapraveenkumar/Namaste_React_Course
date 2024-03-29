import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user)

  const hadleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {})
    .catch((error) => {
      // An error happened.Move to error page
    });
  }

  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //User SignIn/ SingUp
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")
      
      }else{
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });
    return ()=> unsubscribe();
  },[]);


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={LOGO}
            alt='logo' className='w-44'
        />
        { user && <div className='flex p-2 '>
          <img className='w-12 h-12'
            src={user?.photoURL}
            alt='usericon'
          />
          <button onClick={hadleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>}
        
    </div>
  )
}

export default Header