import React, { act, useContext } from 'react'
import Login from './components/Auth/Login'
import { useEffect ,useState} from 'react'
import EmployeeDashBord from './components/DashBord/EmployeeDashBord'
import AdminDashBord from './components/DashBord/AdminDashBord'
import { getlocalstorage, setlocalstorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { set } from 'react-hook-form'


const App = () => {

  const [user, setuser] = useState(null)

  const [eachData, seteachData] = useState(null)

  let UserAuth=useContext(AuthContext);

    const [admindata, setadmindata] = useState(null)

const [loggedinUser, setloggedinUser] = useState(null)


useEffect(() => {
  
  let loggedinUser=localStorage.getItem("loggedinUser")

  if(loggedinUser){



    let userData=JSON.parse(loggedinUser);



 setuser(userData.role);

 seteachData(userData.data)
  }
 


},[] )




  


  const handlelogin=(email,password)=>{

    let employee=UserAuth.employee.find((e)=>{
      return e.email.trim().toLowerCase() ==email.trim().toLowerCase() && e.password.trim().toLowerCase()==password.trim().toLowerCase()
  })

  let admin=UserAuth.admin.find((e)=>{
    return e.email.trim().toLowerCase() ==email.trim().toLowerCase() && e.password.trim().toLowerCase()==password.trim().toLowerCase()
})

  if(UserAuth && employee){
    if(employee){
    setuser("employee")
    seteachData(employee)
    setloggedinUser("employee")

    localStorage.setItem("loggedinUser",JSON.stringify({role:"employee",data:employee}))

  }

  } else if(UserAuth && admin){

 setadmindata(admin)

  setuser("admin")

  setloggedinUser("admin")

  localStorage.setItem("loggedinUser",JSON.stringify({role:"admin",data:admin}))


}else(alert("Invalid Credentials"))


  }


  return (
    <>

  {!user ? <Login handle={handlelogin} /> : null}
    
   {user== "admin" ? <AdminDashBord setUser={setuser}  data={admindata} /> : user === "employee" ? <EmployeeDashBord  setUser={setuser}  data={eachData} />:null}
        
    </>
  )
}


export default App