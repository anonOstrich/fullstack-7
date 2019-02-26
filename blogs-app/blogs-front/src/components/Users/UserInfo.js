import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

const UserInfo = ({ user }) => {
  return(
    <Container>
      <h2>{ user.name }</h2>
      <strong>added blogs</strong>
      <ListGroup>
      { user.blogs.map(blog => (
          <ListGroup.Item key={ blog.id }>{ blog.title }</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}

export default UserInfo