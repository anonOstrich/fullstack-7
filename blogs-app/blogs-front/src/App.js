import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setInitialUser } from './reducers/UserReducer'
import { setInitialBlogs } from './reducers/BlogsReducer'
import Togglable from './components/Togglable'
import BlogForm from './components/Blogs/BlogForm'
import Blogs from './components/Blogs/Blogs'
import LoginForm from './components/Login/LoginForm'
import Notification from './components/Notification'
import LoginInformation from './components/Login/LoginInformation'


const App = ({ setInitialUser, user, setInitialBlogs }) => {

  /*
  Helpointa tehdä tässä - ei varmasti haeta useampaan kertaan
  */
  useEffect(setInitialUser
    , [])
  useEffect( () => {setInitialBlogs()}, [])


  if(!user){
    return(<>
        <h2>Log in to application</h2>
        <Notification />
        <LoginForm />
        </>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <LoginInformation />
      <Togglable buttonLabel="lisää blogi">
        <BlogForm />
      </Togglable>
      <Blogs />
    </div>
  )


}

export default connect((state) => ({ user: state.user }), { setInitialUser, setInitialBlogs })(App)