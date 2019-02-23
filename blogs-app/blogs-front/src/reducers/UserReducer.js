import loginService from '../services/login'
import blogService from '../services/blogs'

const initialState = null

const UserReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGOUT_USER':
      return null
    case 'LOGIN_USER':
      return action.data
    default:
      return state
  }
}


const LogoutCreator = () => {
  return ({
    type: 'LOGOUT_USER',
    data: 'none'
  })
}

const LoginCreator = (user) => {

  return {
    type: 'LOGIN_USER',
    data: user
  }
}

export const login = (username, password) => async (dispatch) => {
  const createdUser = await loginService.sendLoginInfo(username, password)
  blogService.setToken(createdUser.token)
  window.localStorage.setItem('loggedAppUser', JSON.stringify(createdUser))
  dispatch(LoginCreator(createdUser))
}

export const logout = () => (dispatch) => {
  dispatch(LogoutCreator())
  window.localStorage.removeItem('loggedAppUser')
}

export const setInitialUser = () =>  dispatch => {
  const jsonUser = window.localStorage.getItem('loggedAppUser')
  if(jsonUser){
    const loggedUser = JSON.parse(jsonUser)
    blogService.setToken(loggedUser.token)
    dispatch(LoginCreator(loggedUser))
  }
}


export default UserReducer