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
            //   localStorage.setItem('jwt', data.token)
                  navigate(`/users/${user.id}`)
                  // navigate('/spells')
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
      <div style={{ textAlign: "center" }}>
          <h1>Login</h1>
          <form onSubmit={ handleSubmit }>
              <div>
                 <label></label> 
                 <input 
                 type="text" 
                 name="username" 
                 placeholder='Username:'
                 value={ username } 
                 onChange={ handleChange }/>
              </div>
              <div>
                 <label>Password: </label> 
                 <input 
                 type="password" 
                 name="password" 
               //   id="password" 
                 value= { password } 
                 onChange= { handleChange }/>
              </div>
              <input type="submit" value="Login"/>
          </form>
          {/* {errors? <div>{errors}</div>:null} */}
      </div>
    )
  }
  

export default Login


//  useEffect(() => {
   //    if( loggedIn) {
   //       navigate('/spells')
   //    }
   //  }, [loggedIn, navigate])