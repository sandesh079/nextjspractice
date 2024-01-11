'use client'
import React from 'react'
import { useState } from 'react'

const login = () => {
    // const userId = {email: 'bipingiri27@gmail.com', password: '12345678'}

    const userEmail = 'user@gmail.com'
    const userPassword = '123'
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    })
    // const [password, setPassword] = useState('')

   return (
    <div>
        <input id='email' onKeyUp={(e)=>{
           setCredentials({email:e.target.value})
        }}  placeholder='Enter email'/> <br/>
        <input id='password' onKeyUp={(e)=>{
            setCredentials({password:e.target.value})
        }} placeholder='Enter password'/>
        <br/>
        <button onClick={()=>{
            console.log(credentials)
            if (credentials.email === userEmail && credentials.password === userPassword){
                alert('Welcome! login successfull')
            } else {
                alert('Credentials do not match')
            }
        }}>Sign in</button>
    </div>

  )
}

export default login