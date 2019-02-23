import React from 'react'
import { connect } from 'react-redux'
import { useField, excludeReset } from '../hooks/index'
import { changeNotificationForSeconds } from '../reducers/NotificationReducer'
import { createBlog } from '../reducers/BlogsReducer'

const NoteForm = ({ createBlog, changeNotificationForSeconds }) => {
  const titleField = useField('text')
  const authorField = useField('text')
  const urlField = useField('text')


  const handleCreateBlog = async event => {
    event.preventDefault()
    try{
      
      createBlog({
        title: titleField.value,
        author: authorField.value,
        url: urlField.value })


      changeNotificationForSeconds(`a new blog ${titleField.value} by ${authorField.value} added`, false , 5)
      titleField.reset()
      authorField.reset()
      urlField.reset()
    } catch(exception){
      changeNotificationForSeconds('an error occured in creating the blog', true, 5)
    }
  }


  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleCreateBlog}>
        title <input {...excludeReset(titleField)}/><br />
        author <input { ...excludeReset(authorField) }/><br />
        url <input {...excludeReset(urlField)}/><br />
        <button type="submit">create</button>
      </form>
    </div>
  )
}



const mapDispatchToProps = {
  changeNotificationForSeconds,
  createBlog
}

export default connect(null, mapDispatchToProps)(NoteForm)