import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='absolute w-full aspect-video pt-[20%] px-12  text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='py-6 text-sm w-1/4'>{overview}</p>
      <div>
        <button 
          className='p-3 px-10 text-lg bg-white rounded-lg text-black font-bold hover:bg-opacity-70'
        >
          Play
        </button>

        <button 
          className='p-3 px-10 text-lg bg-gray-500 bg-opacity-50 rounded-lg text-white mx-2 font-bold hover:bg-opacity-80'
        >
          More Info
        </button>
        
      </div>
    </div>
  )
}

export default VideoTitle