import React, { useState } from 'react';
import { headers } from '../../Globals';
import { useNavigate } from 'react-router-dom';


const Login = ({ updateUser}) => { 
    const [form, setForm ] = useState({
         username: '',
         password: ''
    })
    const [ errors, setErrors ] = useState([])
    const navigate = useNavigate()

    const {username, password} = form

    const handleSubmit = (e) => {
        e.preventDefault()
      const user = {
              username,
              password
           }
      
        fetch('/login', {
           method: "POST",
           headers,
           body: JSON.stringify(user)
        })
           .then(resp => {
            if(resp.ok){
               resp.json().then(user => {
                  updateUser(user)
                  navigate('/me')
               })
            }else {
               resp.json().then(json => setErrors(json.errors))
            }
         })
   
     }  

     const handleChange = (e) => {
      const { name, value } = e.target 
      setForm({ ...form, [name]: value})
     }
        
    return (
      <div style={{ textAlign: "center", fontFamily: 'cursive' }}>
          <h1 style={{fontSize: 45}}>Login</h1>
          <form onSubmit={ handleSubmit }>
              <div>
                 <label style={{fontSize: 30}}>Username: </label> 
                 <input 
                 type="text" 
                 name="username" 
                 value={ username } 
                 onChange={ handleChange }/>
              </div>
              <div>
                 <label style={{fontSize: 30}}>Password: </label> 
                 <input 
                 type="password" 
                 name="password" 
                 value= { password } 
                 onChange= { handleChange }/>
              </div>
              <input style={{ fontFamily: 'cursive'}}type="submit" value="submit"/>
          </form>
          {errors? <div>{errors}</div>:null}
      </div>
    )
  }
  

export default Login


//  useEffect(() => {
   //    if( loggedIn) {
   //       navigate('/spells')
   //    }
   //  }, [loggedIn, navigate])
     //   localStorage.setItem('jwt', data.token)