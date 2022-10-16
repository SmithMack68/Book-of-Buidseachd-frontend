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
          <li><Link to="/spells">Spells</Link></li>
          {user ? <li><Link to={'/'}>{user.username}'s Grimoire</Link></li> : null}
          <ul></ul>
          {user ? <button onClick={ handleLogout } style={{fontFamily: 'cursive', fontSize: 18}}>Logout</button> : null}
          </nav> 
        </ul>
      </div>
)} else {
  return (
      <div>
         <ul> 
          <nav style={{fontFamily: 'cursive', fontSize: 25}}>
          </nav>
        </ul>
      </div>)
  }

 
}

export default Navbar












  
  
  // // return (
  // //   <div>
  // //       { loggedIn ? loggedInLinks() : loggedOutLinks() }
  // //   </div>
  // // )