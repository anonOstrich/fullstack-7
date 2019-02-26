import React from 'react'
import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'

import { useField, excludeReset } from '../../hooks/index'
import { changeNotificationForSeconds } from '../../reducers/NotificationReducer'
import { createBlog } from '../../reducers/BlogsReducer'
import Button from 'react-bootstrap/Button'

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
    <>
    <h2>Create new</h2>
    <Form onSubmit={handleCreateBlog}>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control {...excludeReset(titleField)} />   
    </Form.Group>
    <Form.Group>
      <Form.Label>Author</Form.Label>
      <Form.Control { ...excludeReset(authorField)} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Url</Form.Label>
      <Form.Control {...excludeReset(urlField)} />
    </Form.Group>
    <Button variant="primary" type="submit">create</Button>
    </Form>
  </>
  )
}



const mapDispatchToProps = {
  changeNotificationForSeconds,
  createBlog
}

export default connect(null, mapDispatchToProps)(NoteForm)