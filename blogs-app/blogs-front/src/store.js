import { createStore, combineReducers} from 'redux'
import NotificationReducer from './reducers/NotificationReducer'

const reducer = combineReducers({
    notification: NotificationReducer,
})


export default createStore(reducer)

