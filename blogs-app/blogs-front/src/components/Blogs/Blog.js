import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container }  from 'react-bootstrap'

const Blog = ({ blog }) => {


  return (
    <Container fluid>
        <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
    </Container>
  )}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog