import React from 'react'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const UserPage = ({ currentUser }) => {
  // const [ user, setUser] = useState()
  // const params = useParams()
  // const {id} = params

  return (
    <div>Welcome: {currentUser.username }</div>
  )
}

export default UserPage