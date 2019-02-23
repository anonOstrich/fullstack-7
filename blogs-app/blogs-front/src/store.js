import { createStore, combineReducers, applyMiddleware } from 'redux'
import NotificationReducer from './reducers/NotificationReducer'
import BlogsReducer from './reducers/BlogsReducer'
import UserReducer from './reducers/UserReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notification: NotificationReducer,
  user: UserReducer,
  blogs: BlogsReducer,
})


export default createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk)))

