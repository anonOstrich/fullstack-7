import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCommentsForBlog } from '../../reducers/BlogsReducer'

const Comments = ({ blogId, blog, fetchCommentsForBlog }) => {

  useEffect(() => { fetchCommentsForBlog(blog) }, [])

  return(<div>
    <h3>comments</h3>
    <ul>
      {blog.comments && blog.comments.map(comment => (<li key={comment.id}>{ comment.content }</li>)) }
    </ul>
  </div>)
}

export default connect((state, ownProps) => ({
  blog: state.blogs.find(b => b.id === ownProps.blogId)
}), { fetchCommentsForBlog })(Comments)