import React from 'react'
import { connect } from 'react-redux'
import UserInfo from '../Users/UserInfo'


const UserView = ({ userId, user }) => {

  if(!user)
    return <></>

  return(
    <UserInfo user={ user }/>
  )}

export default connect((state, ownProps) => ({
  user: state.users.find(u => u.id === ownProps.userId)
}))(UserView)


