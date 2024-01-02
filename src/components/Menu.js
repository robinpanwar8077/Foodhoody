import React,{useEffect,useState} from 'react'
import Header from './navbar/Header'
import axios from 'axios'
import Cart from './Cart'
import {  useSelector } from 'react-redux'
import { productsApi } from '../redux/Rtkquery'
import { productsApisec } from '../redux/Rtkquerysec'

const Menu = () => {
const selector= useSelector(state=>state.products)
console.log(selector,"sele")
     const {data,error,isloading} = productsApi.useGetAllProductsQuery();
    // const {data,error,isloading} = productsApisec.useGetAllProductsQuery()

    console.log(data,"dat")

   
  return (
 <>
 <div>
 <Header cart={true}/>
 </div>
 
    <div className=" w-[1200px]  flex mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-4 justify-center items-center m-auto" >
{
    data?.map((item,index)=>{


return (
  <div className='m-auto'>
<Cart key={item.id} item={item} index={index} />
</div>

       )   })
}
</div>

 </>
  )
}

export default Menu