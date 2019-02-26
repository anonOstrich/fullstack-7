import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useField, excludeReset } from '../../hooks/index'
import { addCommentForBlog } from '../../reducers/BlogsReducer'

const CommentForm = ({ blogId, blog, addCommentForBlog }) => {
  const commentField = useField('text')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addCommentForBlog(blog, commentField.value)
    commentField.reset()
  }

  return(
    <Form onSubmit={handleSubmit}>
    
    <Form.Row>
      <Col>
      <Form.Control { ...excludeReset(commentField) }></Form.Control>
      </Col>
      <Col>
      <Button type="submit">add comment</Button>
      </Col>
    </Form.Row>
    </Form>

  )

}

export default connect((state, ownProps) => ({ blog: state.blogs.find(b => b.id === ownProps.blogId)}), { addCommentForBlog })(CommentForm)

