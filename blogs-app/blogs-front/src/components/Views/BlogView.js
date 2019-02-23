import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import BlogInfo from '../Blogs/BlogInfo'

const BlogView = ({ blogId, blog }) => {
  if(!blog)
    return <Redirect to="/blogs" />

  return <BlogInfo blog={ blog } />
}



export default connect((state, ownProps) => ({
  blog: state.blogs.find(blog => blog.id === ownProps.blogId)
}))(BlogView)