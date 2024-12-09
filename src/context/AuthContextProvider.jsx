import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({children}) => {


  const [admin,setAdmin] = useState(null)
  const [employee,setEmployees] = useState(null)

  // data storage for header
  const [currentuser,setCurrentUser] = useState(null)


  useEffect(()=>{
    setAdmin(JSON.parse(localStorage.getItem('admin')))
    setEmployees(JSON.parse(localStorage.getItem("employee")))
  },[])

  return (
    <div>
     <AuthContext.Provider value={{admin,employee,currentuser,setCurrentUser}}>
        { children }
     </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
