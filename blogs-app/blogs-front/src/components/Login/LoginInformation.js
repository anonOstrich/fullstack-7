import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { logout, setInitialUser } from '../../reducers/UserReducer'

const LoginInformation = ({ user, logout, setInitialUser }) => {

  useEffect(setInitialUser, [])

  return(<>
    {user.name} logged in{' '}
    <Button variant="dark" onClick={() => logout()}>logout</Button>
  </>)
}

export default connect(state => ({
  user: state.user
}), {
  logout,
  setInitialUser
})(LoginInformation)