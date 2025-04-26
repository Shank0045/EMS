import React from 'react'
import Head from '../others/Head'

const EmployeeDashBord = (props) => {



  return (
    <div>
      <Head  setUser={props.setUser}  data={props.data}/>
    </div>
  )
}

export default EmployeeDashBord