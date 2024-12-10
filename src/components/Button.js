import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex'>
        <button className='px-4 py-2 m-2 bg-gray-400 rounded-lg'>{name}</button>
        
    </div>
  )
}

export default Button;