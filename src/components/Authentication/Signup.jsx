import React, { useState } from 'react';
import { baseUrl, headers } from '../../Globals';



const Signup = ({ loginUser }) => {
   //  const [ form, setForm ] = useState({
   //    username: '',
   //    creature_type: '',
   //    age: '',
   //    paswword: ''
   //  })
    const [ username, setUsername ] = useState('')
   //  const [ creature_type, setCreature_type ] = useState('')
   //  const [ age, setAge ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()

      const strongParams = {
         user: {
            username,
            // creature_type,
            // age,
            password
         }
      }
      fetch(baseUrl + '/users', {
         method: "POST",
         headers,
         body: JSON.stringify(strongParams)
      })
         .then(resp => resp.json())
         .then(data => {
            loginUser(data.user)
            localStorage.setItem('jwt', data.token)
         })

    }

    
  return (
    <div>
        <h1>Create Account</h1>
        <form onSubmit={ handleSubmit }>
            <div>
               <label htmlFor="username">Username: </label> 
               <input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) }/>
            </div>
            {/* <div>
               <label htmlFor="creature_type">Class: </label> 
               <input type="text" name="creature_type" id="creature_type" value={ creature_type } onChange={ e => }/>
            </div>
            <div>
               <label htmlFor="age">Age: </label> 
               <input type="integer" name="age" id="age"/>
            </div> */}
            <div>
               <label htmlFor="password">Password: </label> 
               <input type="password" name="password" id="password" value= { password } onChange= { e => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Signup"/>
        </form>
    </div>
  )
}

export default Signup