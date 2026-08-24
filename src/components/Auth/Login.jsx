import  {useState} from "react";
import React from 'react'
const Login = () =>{
  const [email  , setEmail] =  useState('');
  const [password , setPassword] = useState('');
  const submitHandler = (event) =>{
    event.preventDefault();
    console.log("email is " , email);
    console.log("Password is ", password);
    setEmail("");
    setPassword("");
  }
  return(
    <div className='flex  h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center'>
                 <input
                 value = {email}
                 onChange={(e) =>{
                   setEmail(e.target.value);
                 }}
                  required className='border-2  placeholder:text-white border-emerald-600 py-3 px-3 text-xl text-black outline-none bg-transparent rounded-full'type="email" placeholder="Enter your email"/>
                 <input 
                  value = {password}
                 onChange={(e) =>{
                   setPassword(e.target.value);
                 }}
                  required className='border-2 placeholder:text-white border-emerald-600 mt-3 py-3 px-3 text-xl text-black outline-none bg-transparent rounded-full' type="password" placeholder="Enter your password"/>

                 <button   className='border-2 placeholder:text-white  mt-3 py-3 px-3 text-xl text-white border-none bg-emerald-600 rounded-full'>Login</button>
            </form>
        </div>

     </div>
    

  )
}

export default Login