import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'

import Blog from './Blog'
import { connect } from 'react-redux'

const Blogs = ({ blogs }) => {

  return(
    <ListGroup>
    { blogs.map(
    blog => 
    (
    <ListGroup.Item variant="primary" as="a">
    <Blog key={blog.id}
      blog={blog} />
    </ListGroup.Item>
    )

    ) }

  </ListGroup>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(Blogs)