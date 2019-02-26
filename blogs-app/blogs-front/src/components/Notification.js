import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = ({ message, isError }) => {

  if(!message)
    return <></>

  return (
    <Alert variant={ isError ? 'danger' : 'success' }>
      <p>{message}</p>
      </Alert>
  )
}

const mapStateToProps = (state) => {
  
  return { message: state.notification.text,
           isError: state.notification.isError }
}


export default connect(mapStateToProps)(Notification)