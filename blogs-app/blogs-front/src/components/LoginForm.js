import React from 'react'
import { useField, excludeReset } from '../hooks/index'
const login = () => null

const LoginForm = () => {
  const usernameField = useField('text')
  const passwordField = useField('password')

  return (
  <div>
  <form onSubmit={login}>
    käyttäjätunnus <input {...excludeReset(usernameField)}/> <br />
    salasana <input {...excludeReset(passwordField)}/>
      <button type="submit">kirjaudu</button>
    </form>
  </div>)
}

export default LoginForm