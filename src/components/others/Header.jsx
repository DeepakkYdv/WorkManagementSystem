import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'


// eslint-disable-next-line react/prop-types
function Header() {
  
  const{currentuser,setCurrentUser} = useContext(AuthContext)
  const handleLogout = () => {
    setCurrentUser(null); 
    localStorage.removeItem("currentUser");
  };
// console.log(currentuser)
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-center p-4 md:p-[2vw] rounded-lg bg-zinc-800">
  {/* Greeting Section */}
  <h1 className="font-medium text-center md:text-left">
    HELLO <br />
    <span className="text-2xl md:text-3xl font-semibold">
      {currentuser?.Data?.Name || "User"} 👋
    </span>
  </h1>

  {/* Logout Button */}
 { currentuser?.role =="admin" ? (<button
    className="bg-green-400 rounded-lg w-full md:w-[12vw] h-[6vh] mt-3 md:mt-0 font-semibold text-center"
    // onClick={addEmp}
  >
    Add New Employee
  </button>):""}
  <button
    className="bg-red-400 rounded-lg w-full md:w-[12vw] h-[6vh] mt-3 md:mt-0 font-semibold text-center"
    onClick={handleLogout}
  >
   Log out
  </button>
</div>

  )
}

export default Header
