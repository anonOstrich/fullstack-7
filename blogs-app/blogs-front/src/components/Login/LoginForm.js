import React from 'react'
import { connect } from 'react-redux'
import { useField, excludeReset } from '../../hooks/index'
import { changeNotificationForSeconds } from '../../reducers/NotificationReducer'
import { login } from '../../reducers/UserReducer'

const LoginForm = ({ changeNotificationForSeconds, login }) => {
  const usernameField = useField('text')
  const passwordField = useField('password')


  const handleLogin = (event) => {
    event.preventDefault()
    try{
      login(usernameField.value, passwordField.value)
      usernameField.reset()
      passwordField.reset()
    } catch(exception) {
      changeNotificationForSeconds('wrong username or password', true, 3)
    }
  }

  return (
  <div>
  <form onSubmit={handleLogin}>
    käyttäjätunnus <input {...excludeReset(usernameField)}/> <br />
    salasana <input {...excludeReset(passwordField)}/>
      <button type="submit">kirjaudu</button>
    </form>
  </div>)
}

export default connect(null, {
  changeNotificationForSeconds,
  login
})(LoginForm)