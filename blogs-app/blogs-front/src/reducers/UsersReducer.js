import usersService from '../services/users'

const initialState = []

const UsersReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_USER':
    case 'ADD_USERS':
      return state.concat(action.data)
    default: 
      return state
  }
}

const CreateAddUsers = (users) => {
  return {
    type: 'ADD_USERS',
    data: users
  }
}


export const setInitialUsers = () => async (dispatch) => {
  const result = await usersService.getAll()
  dispatch(CreateAddUsers(result))
}



export default UsersReducer