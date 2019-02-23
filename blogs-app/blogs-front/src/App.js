import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import BlogsView from './components/Views/BlogsView'
import UsersView from './components/Views/UsersView'
import UserView from './components/Views/UserView'

import { setInitialUser } from './reducers/UserReducer'
import { setInitialBlogs } from './reducers/BlogsReducer'
import { setInitialUsers } from './reducers/UsersReducer'

import LoginForm from './components/Login/LoginForm'
import Notification from './components/Notification'
import LoginInformation from './components/Login/LoginInformation'



const App = ({ setInitialUser, user, setInitialBlogs, setInitialUsers }) => {

  /*
  Helpointa tehdä tässä - ei varmasti haeta useampaan kertaan
  */
  useEffect(setInitialUser
    , [])
  useEffect( () => {setInitialBlogs()}, [])
  useEffect( () => { setInitialUsers() }, [])


  if(!user){
    return(<>
        <h2>Log in to application</h2>
        <Notification />
        <LoginForm />
        </>
    )
  }

  return (
    <Router>
    <div>
    <Notification />
    <LoginInformation />
    <Route  exact path="/" render={() => <BlogsView />} />
    <Route  exact path="/users" render={() => <UsersView />}/>

    <Route exact path="/users/:id" render={({ match }) =>
      <UserView userId={match.params.id} />
    }/>
    </div>
    </Router>
  )


}

export default connect((state) => ({ user: state.user }), { setInitialUser, setInitialBlogs, setInitialUsers })(App)