import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='absolute w-full aspect-video pt-[20%] px-6 md:px-12 text-white bg-gradient-to-r from-black'>
      <h1 className=' text-2xl md:text-5xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
      <div>
        <button 
          className='py-1 my-4 px-3 md:py-3 md:px-10 text-lg bg-white rounded-lg text-black font-bold hover:bg-opacity-70 focus:ring-2 focus:ring-red-500 ring-offset-2'
        >
          Play
        </button>

        <button 
          className='hidden md:inline-block p-3 px-10 text-lg bg-gray-500 bg-opacity-50 rounded-lg text-white mx-2 font-bold hover:bg-opacity-80 focus:ring-2 focus:ring-red-500 ring-offset-2'
        >
          More Info
        </button>
        
      </div>
    </div>
  )
}

export default VideoTitle