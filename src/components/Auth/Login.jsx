// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'



// eslint-disable-next-line react/prop-types
function Login  ( {handlLogin} ) {
 /// console.log(handlLogin)
  const [usermail, setUsermail] = useState();
  const [userpass, setUserpass] = useState();

  const submitHandler = (e) =>{
    e.preventDefault()
    handlLogin(usermail,userpass)
    //handlLogin(usermail,userpass)
    // console.log("your mail-" ,usermail)
    // console.log("your pass-" ,userpass)
    setUserpass('')
    setUsermail('')
  }
  return (
    <div className='flex bg-[#1C1C1C] h-screen w-full items-center justify-center'>
       <div className='border-2 border-emerald-700 py-[15vw] px-[10vw] rounded-lg'>
          <form 
          onSubmit={submitHandler} 
          className='flex flex-col items-center justify-center'>
            <input 
            onChange={(e)=>setUsermail(e.target.value)}
            value = {usermail}
            type="email" placeholder='Enter Your Email' className='text-white border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full '/>
            <input 
             onChange={(e)=>setUserpass(e.target.value)}
             value = {userpass}
             type='password' placeholder='Enter Password' className='text-white border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full mt-3'/>
            <button className='text-white outline-none w-full bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3'>Log in</button>
          </form>
       </div>
    </div>
  )
}



export default Login
