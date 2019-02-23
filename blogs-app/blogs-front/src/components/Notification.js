import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ message, isError }) => {
  const notificationStyle = {
    color: isError ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5
  }

  if(!message)
    return <></>

  return (
    <div style={notificationStyle}>
      <p>{message}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  
  return { message: state.notification.text,
           isError: state.notification.isError }
}


export default connect(mapStateToProps)(Notification)