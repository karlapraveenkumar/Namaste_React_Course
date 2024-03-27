import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)

  const hadleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.Move to error page
    });
  }


  return (
    <div className='absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src=
          'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='logo' className='w-44'
        />
        { user && <div className='flex p-2 items-center'>
          <img className='w-10 h-10 rounded-2xl'
            src={user?.photoURL}
            alt='usericon'
          />
          <button onClick={hadleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>}
    </div>
  )
}

export default Header