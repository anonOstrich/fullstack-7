import React from 'react'
import { connect } from 'react-redux'
import BlogInfo from '../Blogs/BlogInfo'
import { fetchCommentsForBlog } from '../../reducers/BlogsReducer'

const BlogView = ({ blogId }) => {
  return <BlogInfo blogId={ blogId } />
}



export default connect(null,{ fetchCommentsForBlog })(BlogView)