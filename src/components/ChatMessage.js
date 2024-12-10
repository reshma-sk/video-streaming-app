import React from 'react'
import { userIcon } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
        <img className='h-8' src={userIcon} alt="user icon" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
    
  )
}

export default ChatMessage