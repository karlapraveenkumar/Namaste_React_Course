import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='w-96 md:w-[520%]'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer