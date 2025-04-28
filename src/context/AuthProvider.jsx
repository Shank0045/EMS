import React, { createContext } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage'
import { useState ,useEffect} from 'react'

export const AuthContext=createContext()



const AuthProvider = ({children}) => {
  
  // localStorage.clear()

  setlocalstorage()

    const [Userdata, setUserdata] = useState(null);



    useEffect(() => {
        let {employee,admin}=getlocalstorage();
        
        setUserdata({employee,admin})


    }, [])
    
 





  return (
    <div>
         <AuthContext.Provider value={Userdata}>

         {children}
         </AuthContext.Provider>
 
    
    </div>
  )
}

export default AuthProvider