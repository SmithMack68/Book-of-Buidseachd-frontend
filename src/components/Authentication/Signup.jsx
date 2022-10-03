import React, { useState } from 'react';
import { headers } from '../../Globals';
import { useNavigate } from "react-router-dom";


const Signup = ({ updateUser }) => {
    const [ form, setForm ] = useState({
      username: '',
      creature_type: '',
      age: '',
      paswword: ''
    })
   //  const [ errors, setErrors ] = useState([])
    const navigate = useNavigate()
    const { username, creature_type, age, password } = form

   
    const handleSubmit = (e) => {
      e.preventDefault()

      const user = {
            username,
            creature_type,
            age,
            password
      }

      fetch('/users', {
         method: "POST",
         headers,
         body: JSON.stringify(user)
      })
         .then(resp => {
            if(resp.ok){
               resp.json().then(user => {
               updateUser(user)
            // localStorage.setItem('jwt', data.token)
               navigate(`/users/${user.id}`)
               })
            }else {
               // resp.json().then(json => setErrors(Object.entries(json.errors)))
               resp.json().then(errors => {
                  console.error(errors)
               })
            }
         })  
    }       

   
    const handleChange = (e) => {
      setForm({...form,
      [e.target.name]:e.target.value})
    }
    
  return (
    < >
        <h1 style={{ textAlign: "center"}}>Create Account</h1>
        <form onSubmit={ handleSubmit } style={{ textAlign: "center"}} >
            <div >
               <label>Username: </label> 
               <input 
               type="text" 
               name="username" 
               value={ username }
               onChange={ handleChange }/>
            </div>
            <div>
               <label>Class: </label> 
               <input 
               type="text" 
               name="creature_type" 
               value={ creature_type }
               onChange={ handleChange}/>
            </div>
            <div>
               <label>Age: </label> 
               <input 
               type="integer" 
               name="age"
               value={ age }
               onChange={ handleChange }/>
            </div>
            <div>
               <label>Password: </label> 
               <input 
               type="password" 
               name="password" 
               value= { password }
               onChange= {handleChange}/>
            </div>
            <input type="submit" value="Signup"/>
        </form>
{/* { errors? errors.map(error => <div> {error[0]} {error[1]} {error[2]} {error[3]}</div>) :null } */}
    </>
  )
}

export default Signup


// useEffect(() => {
   //    if( loggedIn ){
   //       navigate('/spells')
   //    }
   // }, [loggedIn, navigate]) 
