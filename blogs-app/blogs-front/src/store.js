import { createStore, combineReducers, applyMiddleware } from 'redux'
import NotificationReducer from './reducers/NotificationReducer'
import BlogsReducer from './reducers/BlogsReducer'
import UserReducer from './reducers/UserReducer'
import UsersReducer from './reducers/UsersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//user: possibly logged in user
//users: info about all the registered users
const reducer = combineReducers({
  notification: NotificationReducer,
  user: UserReducer,
  users: UsersReducer,
  blogs: BlogsReducer,
})


export default createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk)))

