import React from 'react'
import LoginInformation from './Login/LoginInformation'
import { Link } from 'react-router-dom'


const NavBar = () =>{
  const navStyle = {
    backgroundColor: 'lightgray',
    padding: 10,
    justifyContent: 'space-between'
  }

  return(
    <div style={ navStyle }>
      <Link to="/blogs">blogs</Link> 
      {' '}
      <Link to="/users">users</Link>
      {' '}
      <LoginInformation />
    </div>
  )
}

export default NavBar