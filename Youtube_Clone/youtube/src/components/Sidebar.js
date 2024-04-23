import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='w-full p-5 shadow-lg '>
      <ul>
        <h1 className='font-bold pt-5 hover:bg-gray-100'><Link to="/">Home</Link></h1>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Your movies</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li>Your clips</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcast</li>

      </ul>


    </div>
  )
}

export default Sidebar