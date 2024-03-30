import React from 'react'
import { IMG_CDN } from '../utils/constants'


const MovieCard = ({poster_path}) => {
  return (
    <div className='w-44 pr-4 cursor-pointer'>
      <img src={IMG_CDN + poster_path} alt='Moive Card'/>
    </div>
  )
}

export default MovieCard