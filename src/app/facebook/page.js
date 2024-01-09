'use client'
import React from 'react'
import { useState } from 'react'


const Like = () => {
    let initialLikes = ''
    const [likes, setLike] = useState(initialLikes)
    const totalLikes = ()=>{
        if (likes == initialLikes){
            setLike(likes + 1)
        } else {
            setLike(likes - 1)
        }
        
    }
  return (
    <div>
      <p>{likes} people like this post</p>
      <button onClick={totalLikes}>Like</button>
    </div>
  )
}

export default Like
