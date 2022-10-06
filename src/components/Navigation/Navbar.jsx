import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = ({ user, updateUser, loggedIn, logout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    updateUser("")
    logout()
    navigate('/')
  }

  
if (loggedIn) {
   return (
      <div>
        <ul> 
          <nav style={{fontFamily: 'cursive', fontSize: 25}}>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li> */}
          <li><Link to="/spells">Spells</Link></li>
          {user ? <li><Link to={'/me'}>{user.username}'s Grimoire</Link></li> : null}
          <ul></ul>
          {user ? <button onClick={ handleLogout }>Logout</button> : null}
          </nav> 
        </ul>
      </div>
)} else {
  return (
      <div>
         <ul> 
          <nav style={{fontFamily: 'cursive', fontSize: 25}}>
          {/* <li><Link to="/">Home</Link></li> */}
          {/* <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/spells">Spells</Link></li> */}
          </nav>
        </ul>
      </div>)
}





  

 
    }

export default Navbar











 // const handleLogout = (e) => {
  //   e.preventDefault()
  //   logoutUser()
  // }

  
  
  // // return (
  // //   <div>
  // //       { loggedIn ? loggedInLinks() : loggedOutLinks() }
  // //   </div>
  // // )