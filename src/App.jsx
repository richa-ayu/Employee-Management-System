import React, { useEffect,useState } from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () =>{

    //  useEffect(()=>{
    //     //setLocalStorage()
    //     getLocalStorage()
    //  },)

    const [user, setUser] = useState(null)

    const handleLogin = (email, password) =>{
        if(email == 'admin@example.com' && password=='123'){
            console.log("this is Admin")
         }else if(email == 'user@example.com' && password=='123'){
             console.log("This is user")
         }
        else{
            alert("Invalid Credential")
        }
    }
       

    return (
        <>
        {!user ?   <Login handleLogin={handleLogin}/> : ''}
       
        {/* <EmployeeDashboard/> */}
        {/* <AdminDashboard/> */}
        </>
    )
}
 export default App
