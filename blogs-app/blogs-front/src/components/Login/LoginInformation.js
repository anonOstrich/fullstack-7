import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout, setInitialUser } from '../../reducers/UserReducer'

const LoginInformation = ({ user, logout, setInitialUser }) => {

  useEffect(setInitialUser, [])

  return(<>
    {user.name} logged in{' '}
    <button onClick={() => logout()}>logout</button>
  </>)
}

export default connect(state => ({
  user: state.user
}), {
  logout,
  setInitialUser
})(LoginInformation)