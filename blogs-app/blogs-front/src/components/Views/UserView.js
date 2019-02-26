import React from 'react'
import { connect } from 'react-redux'
import UserInfo from '../Users/UserInfo'
import Container from 'react-bootstrap/Container'


const UserView = ({ userId, user }) => {

  if(!user)
    return <></>

  return(
    <Container>
          <UserInfo user={ user }/>
    </Container>
  )}

export default connect((state, ownProps) => ({
  user: state.users.find(u => u.id === ownProps.userId)
}))(UserView)


