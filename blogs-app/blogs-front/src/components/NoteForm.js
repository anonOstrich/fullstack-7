import React from 'react'
import { connect } from 'react-redux'
import { useField, excludeReset } from '../hooks/index'
import blogService from '../services/blogs'

const NoteForm = () => {
  const titleField = useField('text')
  const authorField = useField('text')
  const urlField = useField('text')


  const createBlog = async event => {
    event.preventDefault()
    try{
      const result = await blogService.create({
        title: titleField.value,
         author: authorField.value,
          url: urlField.value })
      titleField.reset()
      authorField.reset()
      urlField.reset()
      updateShownBlogs(result)
      updateNotification(`a new blog ${result.title} by ${result.author} added`)
    } catch(exception){
      updateNotification('an error occured in creating the blog', true)
    }
  }


  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={createBlog}>
        title <input {...excludeReset(titleField)}/><br />
        author <input { ...excludeReset(authorField) }/><br />
        url <input {...excludeReset(urlField)}/><br />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {

}

export default connect()(NoteForm)