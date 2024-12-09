import React, { useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import Employeeashboard from './components/Dashbord/Employeeashboard';
import AdminDashboard from './components/Dashbord/AdminDashboard';
import { AuthContext } from './context/AuthContextProvider';
import { setLocalStorage } from './DataBase/LocalStorage';

function App() {
  //localStorage.clear()
    setLocalStorage();

    const { employee, admin, currentuser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        try {
            const data = localStorage.getItem("currentUser");
            if (data) {
                const parsedData = JSON.parse(data);
                if (parsedData.role && parsedData.Data) {
                    setCurrentUser(parsedData);
                } else {
                    localStorage.removeItem("currentUser");
                }
            }
        } catch (error) {
            console.error("Error parsing localStorage data", error);
            localStorage.removeItem("currentUser");
        }
    }, [setCurrentUser]);

    const handlLogin = (email, password) => {
        if (admin.find(e => e.Email === email && e.Password === password)) {
            const loggedIndata = admin.find(emp => emp.Email === email);
            const adminUser = { role: "admin", Data: loggedIndata };
            setCurrentUser(adminUser);
            localStorage.setItem("currentUser", JSON.stringify(adminUser));
        } else if (employee.find(e => e.Email === email && e.Password === password)) {
            const loggedIndata = employee.find(emp => emp.Email === email);
            if (loggedIndata) {
                const employeeUser = { role: "employee", Data: loggedIndata };
                setCurrentUser(employeeUser);
                localStorage.setItem("currentUser", JSON.stringify(employeeUser));
            }
        } else {
            alert("Wrong Email or Password");
        }
    };


    return (
        <>
            {!currentuser && <Login handlLogin={handlLogin} />}
            {currentuser?.role === "admin" && <AdminDashboard />}
            {currentuser?.role === "employee" && <Employeeashboard/>}
        </>
    );
}

export default App;
