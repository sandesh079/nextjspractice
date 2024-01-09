'use client';
import { useState } from "react";

const Cart = ()=>{
  const [num, setNum] = useState(1)
  const addNum = ()=>{
    setNum(num + 1)
  }
  const subNum = ()=>{
    if(num > 0) {
      setNum(num - 1)
    }
    else{
      alert("Number cannot be less than 0!")
    }
    
  }
  return (
    <div>
      
      <button onClick={addNum}>Increment</button>
      {num}
      <button onClick={subNum}>Decrement</button>
    </div>
  )
}

export default Cart

