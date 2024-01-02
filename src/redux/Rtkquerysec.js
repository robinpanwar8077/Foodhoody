import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const productsApisec= createApi({
    reducerPath:"productsApisec",
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com"}),
    endpoints:(builder)=>({
   getAllProducts:builder.query({
  query:()=>"posts" 

})

    })
    })
  export default productsApisec
