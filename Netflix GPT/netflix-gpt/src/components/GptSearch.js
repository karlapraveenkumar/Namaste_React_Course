import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Background_image } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img src={Background_image}
          alt="Background_image" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch