import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48 text-white'>
      <ul>
        <li className='bg-gray-600 text-center rounded-lg px-1 py-1'> <Link to="/">Home</Link></li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Shorts </li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Videos</li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Music </li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Sports </li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Gaming</li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Movies </li>
      </ul>
      
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Music </li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Sports </li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Gaming</li>
        <li className='text-center rounded-lg px-1 py-1 mt-1'> Movies </li>
      </ul>

    </div>
  )
}

export default SideBar