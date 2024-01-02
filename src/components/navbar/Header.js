import React from 'react'
import './header.css'
import logo from '../assets/restaurant_24px.svg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Header = ({cart}) => {
  const selector= useSelector(state=> state.cart)
  return (
    <>
    <div className=' nav shadow-md w-full fixed top-0 left-0'>
    <div className='nav md:flex items-center justify-between bg-blue py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800 logo-text'>
      <span className='text-3xl text-indigo-600 mr-5 '>
      <img
            className=" logo-img"
            src={logo}
            alt="Your Company"
          />
      </span>
      Food's Restaurant
    </div>

   {cart && <Link to='/cart'><div className="relative">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
<span class="absolute top-2 -right-2  inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-gray-600 rounded-full border border-white">{selector.additems.length}</span>


    </div></Link>}
    
    

   
     
   
</div>
</div>
</>
  )
}

export default Header