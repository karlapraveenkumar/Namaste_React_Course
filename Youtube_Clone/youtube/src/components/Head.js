import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import {Link, useNavigate} from 'react-router-dom';



const Head = () => {

    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const[showSuggestions, setShowSuggestions] = useState(false);
    //const[query, setQuery] = useState('');

    const navigate = useNavigate();
    //const history = UseHistory();

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

    
    const handleSuggestion = (e)=>{
        //setQuery(e.target.innerText);
        //<Link to={'/results?search_query='+encodeURI(e.target.innerText)}>{e}</Link>;
        navigate(`/results?search_query=${encodeURI(e)}`);
    }




  return (
    <div className='w-[465px] md:w-auto grid-flow-row md:grid md:grid-flow-col md:p-5 md:m-2 shadow-sm bg-white sticky top-0'>
        <div className='flex col-span-1 ml-40 md:ml-0 my-2 md:my-0'>
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

        <div className='ml-8 md:ml-0 md:col-span-10 px-10 '>
            <div className='flex'>
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
                        {suggestions.map((s,index)=>

                            <li key={index} onMouseDown={()=>handleSuggestion(s)} className='py-1 px-3 hover:bg-gray-200'>
                                <img  className='mr-5 h-4 ml-3 inline-block' alt='search-icon' src='https://cdn-icons-png.flaticon.com/512/482/482631.png' />
                                <span>{s}</span>
                            </li>
                            
                        )}
                    </ul>
                </div>
                : null
            }
        </div>


        <div className='mb-2 md:mb-0  ml-44 md:ml-0 my-2 md:my-0 col-span-1 justify-self-end mr-3 cursor-pointer flex items-start'>
            <svg xmlns="http://www.w3.org/2000/svg" 
                className= 'h-7 mr-5'
                viewBox="0 0 24 24" focusable="false"
            >
                <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" 
                enableBackground="new 0 0 24 24" viewBox="0 0 24 24" focusable="false" 
                className='h-7 mr-5'
            >
                <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
            </svg>



            <img alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                className='h-8'
            />
        </div>
    </div>
  )
}

export default Head;