import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { likeBlog, deleteBlog } from '../reducers/BlogsReducer'
import { connect } from 'react-redux'

const Blog = ({ blog, user, likeBlog, deleteBlog }) => {

  const [verbose, setVerbose] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const showOnVerbose = { display: verbose ? '' : 'none' }

  const toggleVerbosity = () => {
    setVerbose(!verbose)
  }

  return (
    <div style={blogStyle}>
      <div onClick={toggleVerbosity} className='blogInfo'>
        {blog.title} {blog.author}
        <div>
          <div style={showOnVerbose} className='extraInfo'>
            <a href={'http://www.' + blog.url}>{blog.url}</a><br/>
            {blog.likes} likes <button onClick={() => { likeBlog(blog) }}>like</button> <br/>
      added by  {blog.user ? blog.user.name : 'unknown'} <br/>
            {user === blog.user ?
              <button onClick={ () => { deleteBlog(blog)}}>remove</button>
              : <></>
            }
          </div>
        </div>
      </div>
    </div>
  )}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default connect(state => ({
  user: state.user
}), {
  deleteBlog,
  likeBlog
})(Blog)