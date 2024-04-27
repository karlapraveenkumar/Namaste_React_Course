import React from 'react'
import { Link } from 'react-router-dom';


const ButtonList = () => {

  const list = ["News", "Music", "Live", "Web Development", "System Design", "Game Shows", "Cricket", "Interview Preparation", "Movies"];

  return (
    <div className='overflow-x-auto flex-wrap w-72 md:w-full md:flex overflow-auto whitespace-nowrap'>
      {list.map((item,index)=> (
        <Link key={index} to={"/results?search_query="+item}><button className='px-5 m-2 py-1 hover:bg-gray-200 bg-gray-100 rounded-lg active:bg-gray-300' key={index}>{item}</button></Link>
      ))}
    </div>
  )
}

export default ButtonList;