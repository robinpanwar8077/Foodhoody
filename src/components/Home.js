import React,{useState} from 'react'
import Header from './navbar/Header'
import { productsfetch } from '../redux/ProductSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux'
// import { useGetAllProductsQuery } from '../redux/Rtkquery'
const Home = () => {
  // const {data,error,isloading} = useGetAllProductsQuery()
  // console.log(data,"home")
  const dispatch= useDispatch()
  const selector= useSelector(state=>state.products)
console.log(selector,"sele")
const [cart,showcart] = useState(false)
const navigation= useNavigate();
    function handleclick(){
dispatch(productsfetch())
navigation("/menu")

    }
  return (
  
<>
<Header cart={false}/>
<div>
<div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-5xl " > Welcome to Food's </h1>
      <h1  className="text-center text-5xl ">Restaurant</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"  onClick={handleclick}>
      Go to Menu
    </button>
      </div>
     
    </div>
   
 
   
</>

  )
}

export default Home