import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ message }) => {
    const notificationStyle = {
        color:isError ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5
      }
    
      return (
        <div style={notificationStyle}>
          <p>{message}</p>
        </div>
      )
}

const mapStateToProps = (state) => {
    message: state.notification
}


export default connect(mapStateToProps)(Notification)