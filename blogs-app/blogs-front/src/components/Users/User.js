import React from 'react'
const User = ({ user }) => {
  return(
    <>
    <td>{ user.name }</td>
    <td>{ user.blogs.length }</td>
    </>
  )
}

export default User