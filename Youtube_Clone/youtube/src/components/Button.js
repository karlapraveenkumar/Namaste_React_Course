import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 m-2 py-1 hover:bg-gray-200 bg-gray-100 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button;