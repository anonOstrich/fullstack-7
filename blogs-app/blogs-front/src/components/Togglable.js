import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {setVisible(!visible)}

  const hideWhenVisible = {
    display: visible ? 'none' : ''
  }

  const showWhenVisible = {
    display: visible ? '' : 'none'
  }

  return (
    <Container>
      <div style={hideWhenVisible}>
        <Button variant="secondary" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>

      <div style={showWhenVisible}>
      <Button variant="secondary" size="sm" onClick={toggleVisibility}>cancel</Button>
        {props.children}
      </div>
    </Container>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}


export default Togglable