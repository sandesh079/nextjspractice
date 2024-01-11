'use client';
import { useState } from "react";

const Cart = ()=>{
  const [num, setNum] = useState(0)
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

  // const [text, showText] = useState(false)
  // console.log(text)
  // return (
  //   <div>
  //     {text === true ? <h1>HI</h1>:''}
        
  //     <button onClick={()=>{
  //       showText (true) 
  //       text === true ? showText (false):''
  //     }}>Hello</button>
    
  //   </div>

  // )

}

export default Cart

