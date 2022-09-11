import React, { useState } from 'react'

const Signup = () => {
    const [ username, setUsername ]= useState('')


    
  return (
    <div>
        <h1>Create Account</h1>
        <form>
            <div>
               <label htmlFor="username">Username: </label> 
               <input type="text" name="username" id="username"/>
            </div>
            <div>
               <label htmlFor="creature_type">Class: </label> 
               <input type="text" name="creature_type" id="creature_type"/>
            </div>
            <div>
               <label htmlFor="age">Age: </label> 
               <input type="integer" name="age" id="age"/>
            </div>
            <div>
               <label htmlFor="password">Password: </label> 
               <input type="text" name="password" id="password"/>
            </div>
            <input type="submit" value="Signup"/>
        </form>
    </div>
  )
}

export default Signup