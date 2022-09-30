import React from 'react'

const UserPage = ({ currentUser }) => {
  return (
    <div>Welcome: {currentUser.username }</div>
  )
}

export default UserPage