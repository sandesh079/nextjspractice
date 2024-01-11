'use client'
import React from 'react'
import { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { BsEmojiSurpriseFill } from "react-icons/bs";
import { FaFaceAngry } from "react-icons/fa6";


const Like = () => {
    // let initialLikes = ''
    const [likes, setLike] = useState(0)
    const [reactionOpen, setReactionOpen] = useState(false)
    const [reactionType, setReactionType] = useState('Like')

    const totalLikes = (action)=>{
      setReactionType(action)
        if (likes == 1 ){
            setLike(0)
        } else {
            setLike(1)
        }
        
    }

    const ReactionDiv = () =>{
      return (<div onMouseLeave={()=> setReactionOpen(false)} className='reaction'>
      <button onClick={()=>totalLikes('Like')}><AiFillLike color='blue'/></button>
      <button onClick={()=>totalLikes('Wow')}><BsEmojiSurpriseFill color='orange'/></button>
      <button onClick={()=>totalLikes('Angry')}><FaFaceAngry color='orangered'/></button>
    </div>)
    }

    const generateReactionButton = () =>{
        if(reactionType === 'Wow'){
          return (
            <button onMouseEnter={()=> setReactionOpen(true)} className={reactionType ? 'wowbtn': null} onClick={()=>totalLikes()}><BsEmojiSurpriseFill color='orange'/> {reactionType} </button>

          )
        } else if(reactionType === 'Angry'){
          return (
            <button onMouseEnter={()=> setReactionOpen(true)} className={reactionType ? 'angrybtn': null} onClick={()=>totalLikes()}><FaFaceAngry color='red'/> {reactionType}</button>
          )
        } else {
          return (
            <button onMouseEnter={()=> setReactionOpen(true)} className={reactionType ? 'likebtn': null} onClick={()=>totalLikes()}><AiFillLike/> {reactionType} </button>
          )
        }
    }
    
  return (
    <div className='division'>
      {/* <p>{likes} people like this post</p> */}
      {/* {reactionType} */}
      {reactionOpen && <ReactionDiv/>}
      {generateReactionButton()} 
    </div>
  )
}

export default Like

