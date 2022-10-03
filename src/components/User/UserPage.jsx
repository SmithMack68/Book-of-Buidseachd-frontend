import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const [ user, setUser] = useState()
  const [errors, setErrors] = useState(false)

  const params = useParams()
  const {id} = params


  useEffect(()=> {
    fetch(`/users/${id}`)
    .then(resp => {
        if(resp.ok){
            resp.json().then(user => {
               setUser(user)
               console.log(user)
            })
        }else {
            resp.json().then(data => setErrors(data.error))
        }
    })
   
}, [id])


  // if(errors) return <h1>{errors}</h1>
  return (
    <div style={{textAlign: 'center', fontFamily: 'cursive'}}>
      {/* <user key={user.id}></user> */}
        <h1>Welcome </h1>
        <h2>Casts</h2>
        <ul>
            {/* {user.casts.map(cast => (
              <li key={index}>
                <h2>{cast.spell.name}</h2>
              </li>
            ))} */}
        </ul>
    </div>
  )
}

export default UserPage