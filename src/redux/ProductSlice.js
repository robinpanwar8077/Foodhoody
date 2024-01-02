import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status:null
  }

  export const productsfetch = createAsyncThunk("products/productsfetch",async()=>{
    const response = await axios.get('http://localhost:3031/users')
    return response?.data
  })
  const ProductSlice= createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:{
        [productsfetch.pending]:(state,action)=>{
state.status="pending"
        },
        [productsfetch.fulfilled]:(state,action)=>{
            state.items=action.payload
            state.status="fulfilled"
                    },
                    [productsfetch.rejected]:(state,action)=>{
                       
                        state.status="rejected"
                                },
    }
  })


  export default ProductSlice.reducer