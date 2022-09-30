import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = ({ currentUser, updateUser }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    updateUser("")
    navigate('/')
  }

   return (
      <div>
        <ul>
          <nav>
           
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          {/* <li> Welcome { currentUser.username }</li> */}
          <li><Link to="/spells">Spells</Link></li>
          {currentUser ? <button onClick={handleLogout }>Logout</button> : null}
          </nav>
        </ul>
      </div>





   )
  

  // const handleLogout = (e) => {
  //   e.preventDefault()
  //   logoutUser()
  // }

  
  
  // // return (
  // //   <div>
  // //       { loggedIn ? loggedInLinks() : loggedOutLinks() }
  // //   </div>
  // // )
    }

export default Navbar