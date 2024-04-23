import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {

    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const[showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=> store.search);
    const dispatch = useDispatch()


    useEffect(()=>{
        const timer = setTimeout(()=>{

            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSearchSuggestions();
            }
        },200);

        return ()=>{
            clearTimeout(timer);
        };

    },[searchQuery])

    const getSearchSuggestions = async()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }))
        //console.log("API Call - ", searchQuery);
    }

    

    const toggleMenuhandler = ()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='sticky top-0 z-50 grid grid-flow-col p-5 m-2 shadow-sm bg-white'>
        <div className='flex col-span-1'>
            <img alt='Menu' 
                src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'
                className='h-7 cursor-pointer hover:bg-gray-200 active:bg-gray-100 rounded-full -scale-150 p-1' 
                onClick={()=> toggleMenuhandler()}  
            />

            <a href='/'>
                <img alt="Yoututbe-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'
                    className='h-7 mx-3'
                />
            </a>
        </div>

        <div className='col-span-10 px-10 '>
            <div>
                <input type='text' placeholder='Search' 
                    className='w-[37rem] px-7 border border-gray-300 rounded-l-full p-2'
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=> setShowSuggestions(true)}
                    onBlur={()=> setShowSuggestions(false)}
                />
                <button className='border border-gray-400 rounded-r-full py-2 px-5 bg-gray-100' >
                    🔍
                </button>
            </div>

            {showSuggestions && suggestions?.length ? 
                <div className='fixed bg-white py-2 px-2 w-[37rem] rounded-lg shadow-lg border border-gray-200 cursor-pointer'>
                    <ul>
                        {suggestions.map((s)=> <li key={s} className='py-1 px-3 hover:bg-gray-200'>🔍  {s}</li> )}
                    </ul>
                </div> 
                : null
            }
        </div>

        <div className='col-span-1 justify-self-end mr-3'>
            <img alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                className='h-8'
            />
        </div>
    </div>
  )
}

export default Head