import loginService from '../services/login'


const UserReducer = (state = null, action) => {
  switch(action.type){
    case 'YET_TO_BE_DETERMINED':
      return undefined
    default:
      return state
  }
}




export default UserReducer