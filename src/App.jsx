import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
// import { headers } from './Globals'
import SpellList from './components/Spells/SpellList';
import SpellDetail from './components/Spells/SpellDetail';
import UserPage from './components/User/UserPage';



const App = () => {
  const [ currentUser, setCurrentUser ] = useState("")
  const [ spells, setSpells ] = useState([])
  
  // const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetchSpells()
  }, [])

 const fetchSpells = () => {
  fetch('/spells')
          .then(resp => resp.json())
          .then(spells => setSpells(spells))
      }


//     fetch('/spells')
//     .then(resp => {
//       if(resp.ok){
//         resp.json().then(setSpells)
//       }else {
//         resp.json().then(data => setErrors(data.error))
//       }
//     })
//  }

 const updateUser = (user) => setCurrentUser(user)

//  if(errors) return <h1>{errors}</h1>
  return (
   <Router>
     <Navbar  currentUser={ currentUser} updateUser={ updateUser}/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup updateUser={ updateUser}/>} />
      <Route path="/login" element={<Login updateUser={ updateUser}/>} />
      <Route path="/spells" element={<SpellList spells={ spells }/>} />
      <Route path="/spells/:id" element={<SpellDetail  spells= { spells }/>} />
      <Route path="/users/:id" element={<UserPage currentUser={ currentUser }/>} />
     </Routes>
  </Router>
  );
}

export default App;
















// In first useEffect to use JWT
 // const token = localStorage.getItem('jwt')
      // if(token && !loggedIn) {

       // const loginUser = (user) => {
  //   setCurrentUser(user)
  //   setLoggedIn(true)
  // }

  // const logoutUser = () => {
  //   setCurrentUser({})
  //   setLoggedIn(false)
  //   // localStorage.removeItem('jwt')
  // }
  // const handleCurrentUser = (user) => {
  //   if(user.username) {
  //   setCurrentUser(user)
  //   setLoggedIn(true)
  //   }
  // }
  //   useEffect(() => {
  //     setCurrentUser(handleCurrentUser)
  //   }, [])

    // useEffect(() => {
    //     //fetch to rails backend
    //     if(!loggedIn) {
    //     fetch('/current-user', {
    //       method: "GET",
    //       headers,
    //     })
    //       .then(resp => resp.json())
    //       .then(user => loginUser(user))
    //   }

    //   if(loggedIn) {
    //     fetch('/spells', {
    //       method: "GET",
    //       headers,
    //     })
    //       .then(resp => resp.json())
    //       .then(spells => setSpells(spells))
    //   }

    // }, [loggedIn])
