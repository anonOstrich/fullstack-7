const initialValue = {text: null, isError: false }

const NotificationReducer = (state = initialValue, event) => {
  switch(event.type){
  case 'CHANGE_NOTIFICATION':
    return event.data
  case 'RESET_NOTIFICATION':
    return initialValue
  default:
    return state
  }
}


const createNotification = (text, isError = false) =>  {
  return {
    type: 'CHANGE_NOTIFICATION',
    data: {
        text,
        isError }
  }
}

const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

export const changeNotificationForSeconds = (text, isError = false, delayInSeconds) => {
  return dispatch => {
    dispatch(createNotification(text, isError))
    setTimeout(() => { dispatch(resetNotification())}, 1000 * delayInSeconds)
  }
}



export default NotificationReducer