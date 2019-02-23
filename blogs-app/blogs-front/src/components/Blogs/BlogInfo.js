import React from 'react'
import { connect } from 'react-redux'
import { deleteBlog, likeBlog } from '../../reducers/BlogsReducer'

const BlogInfo = ({ blog = undefined, likeBlog, deleteBlog, user }) => {

  return(
    <div>
      <h2>{`${blog.title} ${blog.author}`}</h2>
      <a href={'http://www.' + blog.url}>{blog.url}</a><br/>
      {blog.likes} likes <button onClick={() => { likeBlog(blog) }}>like</button> <br/>
      added by  {blog.user ? blog.user.name : 'unknown'} <br/>
      {!blog.user || user.username === blog.user.username ?
              <button onClick={ () => { deleteBlog(blog)} }>remove</button>
              : <></>
            }
    </div>
  )
}

export default connect(state => ({ user: state.user }), {
  likeBlog, deleteBlog
})(BlogInfo)