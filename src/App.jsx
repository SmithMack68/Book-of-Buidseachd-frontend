import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { baseUrl, headers, getToken } from './Globals'
import SpellList from './components/Spells/SpellList';
import Spell from './components/Spells/Spell';

const App =() => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [ spells, setSpells ] = useState([])
  const [ loggedIn, setLoggedIn ] = useState(false)

  const loginUser = (user) => {
    setCurrentUser(user)
    setLoggedIn(true)
  }

  const logoutUser = () => {
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')
  }

    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token && !loggedIn) {
        //fetch to rails backend
        fetch(baseUrl + '/get-current-user', {
          method: "GET",
          headers: {
            ...headers,
            ...getToken()
          }
        })
          .then(resp => resp.json())
          .then(user => loginUser(user))
      }

      if(loggedIn) {
        fetch(baseUrl + '/spells', {
          headers: {
            ...headers,
            ...getToken()
          }
        })
          .then(resp => resp.json())
          .then(spells => setSpells(spells))
      }

    }, [loggedIn])


  return (
   <Router>
     <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser}/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup loginUser={ loginUser } loggedIn={ loggedIn }/>} />
      <Route path="/login" element={<Login loginUser={ loginUser } loggedIn={ loggedIn }/>} />
      <Route path="/spells" element={<SpellList loggedIn={ loggedIn } spells= { spells }/>} />
      <Route path="/spells/:id" element={<Spell loggedIn={ loggedIn } spells= { spells }/>} />
     </Routes>
  </Router>
  );
}

export default App;
