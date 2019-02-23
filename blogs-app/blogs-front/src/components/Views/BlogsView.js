import React from 'react'
import Notification from '../Notification'
import LoginInformation from '../Login/LoginInformation'
import Togglable from '../Togglable'
import BlogForm from '../Blogs/BlogForm'
import Blogs from '../Blogs/Blogs'

const BlogsView = () => {
  return(
    <div>
    <h2>blogs</h2>
    <Togglable buttonLabel="lisää blogi">
      <BlogForm />
    </Togglable>
    <Blogs />
  </div>
  )
}


export default BlogsView
