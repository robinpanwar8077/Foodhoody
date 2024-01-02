import { configureStore } from '@reduxjs/toolkit'

import productreducer from './redux/ProductSlice'
import { productsApi } from './redux/Rtkquery'
import { productsApisec } from './redux/Rtkquerysec'
import addtocartreducer from './redux/AddtoCart'

export const store = configureStore({
  reducer: {
    products: productreducer,
    cart:addtocartreducer,
     [productsApi.reducerPath]: productsApi.reducer,
      [productsApisec.reducerPath]: productsApisec.reducer
  },
  middleware:(getDefaultMiddleware)=>
getDefaultMiddleware().concat(productsApisec.middleware,productsApi.middleware),
// middleware:(getDefaultMiddleware)=>
// getDefaultMiddleware().concat(productsApisec.middleware),

  
})