import React from 'react'
import { connect } from 'react-redux'
import { useField, excludeReset } from '../../hooks/index'
import { addCommentForBlog } from '../../reducers/BlogsReducer'

const CommentForm = ({ blogId, blog, addCommentForBlog }) => {
  const commentField = useField('text')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addCommentForBlog(blog, commentField.value)
    commentField.reset()
  }

  return(
    <form onSubmit={handleSubmit}>
      <input { ...excludeReset(commentField) }/>
      <button type="submit">
        add comment
      </button>
    </form>
  )

}

export default connect((state, ownProps) => ({ blog: state.blogs.find(b => b.id === ownProps.blogId)}), { addCommentForBlog })(CommentForm)

