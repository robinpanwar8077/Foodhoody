import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const productsApi= createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3031"}),
    endpoints:(builder)=>({
   getAllProducts:builder.query({
  query:()=>"users" 

})

    })
    })
   
  export default productsApi
    
