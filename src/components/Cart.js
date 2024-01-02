import React from 'react'
import { addtoitem ,removeitem} from '../redux/AddtoCart'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Cart = ({item,index}) => {
// console.log(index,index)


  const dispatch= useDispatch()
   const selector= useSelector(state=> state.cart)
  // console.log(selector,"fk")
  // console.log(selector.additems[index],'selector check')
  function additems(item){


dispatch(addtoitem(item))
  }
  function removeitems(item){
    console.log("jj")
dispatch(removeitem(item))
  }
  return (
    <div className="justify-center items-center">
    <div className=" card bg-white w-[250px] h-[280px] m-2 rounded-lg shadow-lg">
    <div className="top">
      <img
        className="w-[250px] h-[130px] object-cover "
        src={item.image}
        alt="img"
      />
    </div>
    <div className="bottom flex flex-col justify-center items-start p-3 bg-">
      <div className="title font-semibold text-lg my-1">
    {item.name}
      </div>
    

      <div className="pricing flex items-center">
        {" "}
        <div className="price ">price:{selector.additems[index]?.addcount>1?selector.additems[index]?.addcount*item.price:item.price}</div>
       
      </div>
      <div className="flex items-center my-2">
        <button className="border px-5 text-2xl rounded-md mr-1 " style={{backgroundColor:'#505AC9 ',color:'#fff'}} onClick={()=>additems(item)}>
          +
        </button>
       {selector.additems.map(data=> data.id==item.id?data.addcount:null)}
        <button className="border px-5  text-2xl rounded-md " style={{backgroundColor:'grey ',color:'#fff'}}onClick={()=>removeitems(item)}>
          -
        </button>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Cart