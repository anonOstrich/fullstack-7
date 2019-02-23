import React, { useEffect }from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'
import { setInitialBlogs } from '../reducers/BlogsReducer'

const Blogs = ({ blogs, setInitialBlogs }) => {
  useEffect( () => {setInitialBlogs()}, [])

  return(
    blogs.map(blog =>
    <Blog key={blog.id}
      blog={blog} />
  ))
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, { setInitialBlogs })(Blogs)