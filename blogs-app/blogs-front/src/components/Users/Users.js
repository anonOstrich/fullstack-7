import React from 'react'
import { connect } from 'react-redux'
import User from './User'

const Users = ({ users }) => {
  return (
    <div>
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <td></td>
          <td style = { { fontWeight: 'bold' } }>blogs created</td>
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
    </table>
    </div>
  )
}


export default connect(state => ({ users: state.users }))(Users)