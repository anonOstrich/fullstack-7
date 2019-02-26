import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
  <Form onSubmit={ handleLogin }>
  <Form.Group>
    <Form.Label>
      käyttäjätunnus
    </Form.Label>
    <Form.Control {...excludeReset(usernameField)} />
  </Form.Group>

  <Form.Group>
    <Form.Label>
      salasana
    </Form.Label>
    <Form.Control {...excludeReset(passwordField)}/>

  </Form.Group>
  <Button type="submit">kirjaudu</Button>
  </Form>)
}

export default connect(null, {
  changeNotificationForSeconds,
  login
})(LoginForm)