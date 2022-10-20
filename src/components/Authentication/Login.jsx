import React, { useState } from 'react';
import { headers } from '../../Globals';
import { useNavigate } from 'react-router-dom';


const Login = ({ updateUser, login }) => { 
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
                  login(user)
                  updateUser(user)
                  navigate('/')
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
                 <input style={{height: 35, width: 380, fontFamily: 'cursive', fontSize: 30}}
                 type="text" 
                 id='inputID'
                 placeholder='Username:'
                 name="username" 
                 value={ username } 
                 onChange={ handleChange }
                 autoFocus={true}/>
              </div>
              <br></br>
              <div>
                 <input style={{height: 35, width: 380, fontFamily: 'cursive', fontSize: 30}}
                 type="password" 
                 id='inputID'
                 placeholder='Password:'
                 name="password" 
                 value= { password } 
                 onChange= { handleChange }
                 autoFocus={true}/>
              </div>
              <br></br>
              <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
          </form>
          {errors? <div>{errors}</div>:null}
      </div>
    )
  }
  

export default Login








//JWT
//  useEffect(() => {
   //    if( loggedIn) {
   //       navigate('/spells')
   //    }
   //  }, [loggedIn, navigate])
     //   localStorage.setItem('jwt', data.token)