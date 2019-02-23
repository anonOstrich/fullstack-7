import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout, setInitialUser } from '../../reducers/UserReducer'

const LoginInformation = ({ user, logout, setInitialUser }) => {

  useEffect(setInitialUser, [])

  return(<div>
    <p>{user.name} logged in</p>
    <button onClick={() => logout()}>logout</button>
  </div>)
}

export default connect(state => ({
  user: state.user
}), {
  logout,
  setInitialUser
})(LoginInformation)