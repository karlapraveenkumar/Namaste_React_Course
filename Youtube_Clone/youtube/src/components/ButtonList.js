import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All", "News", "Music", "Live", "Web Development", "System Design", "Game Shows", "Cricket", "Interview Preparation"];
  return (
    <div className='flex overflow-auto whitespace-nowrap'>
      {list.map((item,index)=> (<Button key={index} name={item}/>))}
    </div>
  )
}

export default ButtonList;