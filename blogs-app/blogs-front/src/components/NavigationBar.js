import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { LinkContainer } from 'react-router-bootstrap'

import LoginInformation from './Login/LoginInformation'


const NavigationBar = () =>{

  return(
    <Navbar bg="primary" expand="lg">
      <Navbar.Collapse>
      <Nav className="mr-auto">

      <LinkContainer to="/blogs">
      <Nav.Link>blogs</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/users">
      <Nav.Link>
        users
      </Nav.Link>
      </LinkContainer>

      </Nav>
      </Navbar.Collapse>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <LoginInformation />
      </Navbar.Text>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavigationBar