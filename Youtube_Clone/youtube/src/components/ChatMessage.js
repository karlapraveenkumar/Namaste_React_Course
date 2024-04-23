import React from 'react'

const ChatMessage = ({name, message}) => {
    
  return (
    <div className='flex items-start shadow-sm p-2'>
        <img alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            className='h-8'
        />
        <span className='font-bold text-sm px-2'>{name}</span>
        <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage