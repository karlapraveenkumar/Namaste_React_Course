import React from 'react'
import { IMG_CDN } from '../utils/constants'


const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;  //Home work do any separate card if you want
  return (
    <div className='w-36 md:w-44 pr-4 cursor-pointer'>
      <img src={IMG_CDN + poster_path} alt='Moive Card'/>
    </div>
  )
}

export default MovieCard