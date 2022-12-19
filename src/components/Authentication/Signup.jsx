import React, { useState } from 'react';
import { headers } from '../../Globals';
import { useNavigate } from "react-router-dom";


const Signup = ({ updateUser, signup }) => {
    const [ form, setForm ] = useState({
      username: '',
      creature_type: '',
      age: '',
      password: ''
    })
    const [ errors, setErrors ] = useState([])
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

      fetch('/signup', {
         method: "POST",
         headers,
         body: JSON.stringify(user)
      })
         .then(resp => {
            if(resp.ok){
               resp.json().then(user => {
               signup(user)   
               updateUser(user)
               navigate('/')
               })
            }else {
               resp.json().then(json => setErrors(Object.entries(json.errors)))

            }
         })  
    }       

   
    const handleChange = (e) => {
         const { name, value } = e.target 
         setForm({ ...form, [name]: value })
      // setForm({...form,
      // [e.target.name]:e.target.value})
    }
    
  return (
    < div style={{ textAlign: "center", fontFamily: 'cursive', color: 'black' }}>
        <h1 style={{ textAlign: "center", fontSize: 45}}>Create Account</h1>
        <form onSubmit={ handleSubmit } style={{ textAlign: "center"}} >
            <div >
               <input style={{height: 35, width: 380, fontFamily: 'cursive', fontSize: 30}}
               type="text" 
               id='inputID'
               placeholder='Username:'
               name="username" 
               value={ form.username }
               onChange={handleChange}
               autoFocus={true}/>
            </div>
            <br></br>
            <div>
               <input style={{height: 35, width: 380, fontFamily: 'cursive', fontSize: 30, color: 'black'}}
               type="text" 
               id='inputID'
               placeholder='Class:'
               name="creature_type" 
               value={ form.creature_type }
               onChange={handleChange}
               autoFocus={true}/>
            </div>
            <br></br>
            <div>
               <input style={{height: 45, width: 380, fontFamily: 'cursive', fontSize: 30}}
               type="integer" 
               id='inputID'
               placeholder='Age:'
               name="age"
               value={ form.age }
               onChange={handleChange}
               autoFocus={true}/>
            </div>
            <br></br>
            <div>
               <input style={{height: 35, width: 380, fontFamily: 'cursive', fontSize: 30}}
               type="password" 
               id='password'
               placeholder='Password:'
               name="password" 
               value= {form.password}
               onChange= {handleChange}/>
            </div>
            <br></br>
            <input style={{fontFamily: 'cursive', fontSize: 18}}type="submit" value="signup"/>
        </form>
        
         { errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null }
    </div>
  )
}

export default Signup





 // JWT
 // localStorage.setItem('jwt', data.token)
 //Errors
// resp.json().then(json => setErrors(Object.entries(json.errors)))