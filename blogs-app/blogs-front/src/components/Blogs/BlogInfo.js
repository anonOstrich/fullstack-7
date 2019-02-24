import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { deleteBlog, likeBlog} from '../../reducers/BlogsReducer'
import Comments from '../Comments/Comments'

const BlogInfo = ({ blogId, blog, likeBlog, deleteBlog, user}) => {

  if(!blog)
    return <Redirect to="/blogs" />


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

       <Comments blogId={ blogId }/>
    </div>
  )
}

export default connect((state, ownProps) => ({ user: state.user, blog: state.blogs.find(b => b.id === ownProps.blogId) }), {
  likeBlog, deleteBlog
})(BlogInfo)