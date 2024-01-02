import React from 'react';
import 'tailwindcss/tailwind.css';
import logo from './assets/restaurant_24px.svg'
import { useNavigate } from "react-router-dom";
import foodbanner from './assets/hero-home-my.jpg'
import './common.css'

const Login = () => {
const navigation= useNavigate();
    const handleSubmit=()=>{
navigation("/home")
    }
  return (
    <>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
     >
     
        <div class="flex flex-col justify-center p-8 md:p-14">
          <span class="mb-3 text-4xl font-bold text-color">Welcome back</span>
          <span class="font-light text-black-400 mb-8 text-color">
            Welcom back! Please enter your details
          </span>
          <div class="py-4">
            <span class="mb-2 text-md text-color">Email</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              required
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md text-color">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="flex justify-end w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md text-color">Remember for 30 days</span>
            </div>
            <span class="font-bold text-md text-color ">Forgot password</span>
          </div>
          <button
          onClick={handleSubmit}
            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300 btn-color"
          >
            Sign in
          </button>
         
          <div class="text-center text-gray-400 text-color">
            Dont'have an account?
            <span class="font-bold text-black text-color">Sign up for free</span>
          </div>
        </div>
     
        <div className="relative max-w-64">
          <img
            src={foodbanner}
            alt="img"
            class="w-[500px] h-[600px] hidden rounded-r-2xl md:block object-cover"
          />
     
        
        </div>
      </div>
    </div>
    </>
  )
}

   
export default  Login