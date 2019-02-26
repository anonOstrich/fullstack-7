import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FaThumbsUp } from 'react-icons/fa'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { deleteBlog, likeBlog } from '../../reducers/BlogsReducer'
import Comments from '../Comments/Comments'
import CommentForm from '../Comments/CommentForm'

const BlogInfo = ({ blogId, blog, likeBlog, deleteBlog, user }) => {

  if(!blog)
    return <Redirect to="/blogs" />


  return(
    <Container>
    <Row>
      <Col>
        <h2>{blog.title + ' ' + blog.author}</h2>
      </Col>
    </Row>
    <Row>
      <Col>
      <a href={'http://www.' + blog.url}>{blog.url}</a>
      </Col>
    </Row>
    <Row>
      <Col md="auto">
      {blog.likes} likes
      </Col>
      <Col>
      <FaThumbsUp  onClick={() => { likeBlog(blog) }}/>
      {' ' + 'like the blog!'}
      </Col>
    </Row>
    <Row>
      <Col md="auto">
      added by  {blog.user ? blog.user.name : 'unknown'}
      </Col>
      <Col>
      {!blog.user || user.username === blog.user.username ?
              <Button size="sm" variant="danger" onClick={ () => { deleteBlog(blog)} }>remove</Button>
              : <></>}
      </Col>
    </Row>

      
       <h3>comments</h3>
       <CommentForm blogId={ blogId } />
       <Comments blogId={ blogId }/>
    </Container>
  )
}

export default connect((state, ownProps) => ({ user: state.user, blog: state.blogs.find(b => b.id === ownProps.blogId) }), {
  likeBlog, deleteBlog
})(BlogInfo)