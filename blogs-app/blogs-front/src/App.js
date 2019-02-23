import React, { useState, useEffect } from 'react'
import { useField, excludeReset } from './hooks/index'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'


const App = () => {
  const [user, setUser] = useState(null)

  // if login information in local storage, log the user in
  useEffect(() => {
    const jsonUser = window.localStorage.getItem('loggedAppUser')
    if(jsonUser){
      const loggedUser = JSON.parse(jsonUser)
      setUser(loggedUser)
      blogService.setToken(loggedUser.token)
    }
  }, [])

  const login = async (event) => {
    event.preventDefault()
    try{
      const createdUser = await loginService.sendLoginInfo(
        usernameField.value, passwordField.value
      )

      setUser(createdUser)
      window.localStorage.setItem('loggedAppUser', JSON.stringify(createdUser))
      blogService.setToken(createdUser.token)

    } catch(exception) {
      console.log('FAIL!')
      console.log('Do this with REDUX later!')
      /*
      setNotification('wrong username or password')
      setTimeout(() => {
        setNotification(null)
      }, 3000) */
    }
  }


  const logout = () => {
    window.localStorage.removeItem('loggedAppUser')
    setUser(null)
  }



  const usernameField = useField('text')
  const passwordField = useField('password')

  if(!user){
    return(
      <div>
        <h2>Log in to application</h2>
        <Notification />
        <form onSubmit={login}>
        käyttäjätunnus <input {...excludeReset(usernameField)}/> <br />
        salasana <input {...excludeReset(passwordField)}/>
          <button type="submit">kirjaudu</button>
        </form>
      </div>)
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <div>
        <p>{user.name} logged in</p>
        <button onClick={logout}>logout</button>
      </div>
      <Togglable buttonLabel="lisää blogi">
        <BlogForm />
      </Togglable>

      <Blogs />
    </div>
  )


}

export default App