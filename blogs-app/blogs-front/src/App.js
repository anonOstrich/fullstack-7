import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import BlogsView from './components/Views/BlogsView'
import BlogView from './components/Views/BlogView'
import UsersView from './components/Views/UsersView'
import UserView from './components/Views/UserView'
import NavigationBar from './components/NavigationBar'

import { setInitialUser } from './reducers/UserReducer'
import { setInitialBlogs } from './reducers/BlogsReducer'
import { setInitialUsers } from './reducers/UsersReducer'

import LoginForm from './components/Login/LoginForm'
import Notification from './components/Notification'



const App = ({ setInitialUser, user, setInitialBlogs, setInitialUsers }) => {

  /*
  Helpointa tehdä tässä - ei varmasti haeta useampaan kertaan
  */
 useEffect( () => {setInitialBlogs()}, [])
  useEffect(setInitialUser
    , [])
  useEffect( () => { setInitialUsers() }, [])


  if(!user){
    return(<Container>
        <h2>Log in to application</h2>
        <Notification />
        <LoginForm />
        </Container>
    )
  }

  return (
    <Router>
    
    <Container>
    <Notification />
    <NavigationBar />
    
    <Route exact path="/" render={() => <Redirect to="/blogs" />}/>

    <Route  exact path="/blogs" render={() => <BlogsView />} />
    <Route  exact path="/users" render={() => <UsersView />}/>

    <Route exact path="/users/:id" render={({ match }) =>
      <UserView userId={match.params.id} />
    }/>

    <Route exact path="/blogs/:id" render={({ match }) => 
      <BlogView blogId={match.params.id}/>}/>
    </Container>
    </Router>
  )


}

export default connect((state) => ({ user: state.user }), { setInitialUser, setInitialBlogs, setInitialUsers })(App)