import React from 'react'
import Togglable from '../Togglable'
import BlogForm from '../Blogs/BlogForm'
import Blogs from '../Blogs/Blogs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BlogsView = () => {
  return(
    <Container>
    <Row>
      <Col>
    <h2>blogs</h2>
    <Togglable buttonLabel="lisää blogi">
      <BlogForm />
    </Togglable>
      </Col>
    </Row>
    <Row>
      <Col>
    <Blogs />
      </Col>
    </Row>
  </Container>
  )
}


export default BlogsView
