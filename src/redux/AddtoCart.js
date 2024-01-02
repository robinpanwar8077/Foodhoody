import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let initialState={
    additems:[],
    totalamount:0,
    totalquantity:0
}


const addtocart= createSlice({
    name:'addtocart',
    initialState,
    reducers:{
       addtoitem:(state,action)=>{
let indexitem= state.additems.findIndex(item=>item.id==action.payload.id)


if(indexitem>=0){

    console.log("fjdjfjjdj",)
    state.additems[indexitem].addcount=state.additems[indexitem].addcount+1
    toast.info(`${action.payload.name}  item added`,{
        position:'top-center'
    })
    console.log(state.additems,"kgg")
}
else{
    console.log("md",state.additems)
    let temp={...action.payload,addcount:1}
    state.additems.push(temp)
    toast.success(`${action.payload.name} added to cart`,{
        position:'top-center'
    })
    console.log(state.additems,"k")
}




       } ,
       removeitem:(state,action)=>{
        let indexitem= state.additems.findIndex(item=>item.id==action.payload.id)
        if(state.additems[indexitem].addcount>1){
            state.additems[indexitem].addcount=state.additems[indexitem].addcount-1
            toast.success(`${action.payload.name} removed from cart`,{
                position:'top-center'
            })
            console.log(state.additems,"str")
        }
        else if(state.additems[indexitem].addcount==1){
       
          console.log("dfj",state.additems)
let filteritem= state.additems.filter(item=>item.id!==action.payload.id)
console.log("fi",filteritem)
 state.additems=filteritem
toast.success(`${action.payload.name}  item removed from cart`,{
    position:'top-center'
})

       }
        },

        subtotal:(state,action)=>{
       let {total,quantity}= state.additems.reduce((acc,items)=>{
  let total= items.price*items.addcount
  acc.total=acc.total+total
acc.quantity=acc.quantity+items.addcount
return acc
        },{
            total:0,
            quantity:0
        })
        state.totalamount=total
        state.totalquantity=quantity
        }
       }
    
})

export const {addtoitem,removeitem,subtotal} =addtocart.actions
export default addtocart.reducer