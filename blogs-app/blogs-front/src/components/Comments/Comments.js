import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { connect } from 'react-redux'
import { fetchCommentsForBlog } from '../../reducers/BlogsReducer'

const Comments = ({ blogId, blog, fetchCommentsForBlog }) => {

  useEffect(() => { fetchCommentsForBlog(blog) }, [])

  return(
  <ListGroup flush>
      {blog.comments && blog.comments.map(comment => (<ListGroup.Item key={comment.id}>{ comment.content }</ListGroup.Item>)) }
    </ListGroup>)
}

export default connect((state, ownProps) => ({
  blog: state.blogs.find(b => b.id === ownProps.blogId)
}), { fetchCommentsForBlog })(Comments)