import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'



const User = ({ user }) => {
  return(
    <>
    <td><Link to={`/users/${user.id}`}>{ user.name }</Link></td>
    <td>{ user.blogs.length }</td>
    </>
  )
}


const Users = ({ users }) => {
  return (
    <div>
    <h2>Users</h2>
    <Table bordered>
      <thead>
        <tr>
          <th>name</th>
          <th>blogs created</th>
        </tr>
      </thead>
      <tbody>
      { users.map(user => {
        return(
          <tr key={ user.id }>
            <User user={user} />
          </tr>
        )
      })}
      </tbody>
    </Table>
    </div>
  )
}


export default connect(state => ({ users: state.users }))(Users)