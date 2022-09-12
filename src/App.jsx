import React, { useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

const App =() => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [ loggedIn, setLoggedIn ] = useState(false)

  const loginUser = user => {
    setCurrentUser(user)
    setLoggedIn(true)
  }

  return (
   <Router>
      { loggedIn ? <h1>You are logged in!</h1> : null }
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup loginUser={ loginUser }/>} />
      <Route path="/login" element={<Login />} />
     </Routes>
  </Router>
  );
}

export default App;
