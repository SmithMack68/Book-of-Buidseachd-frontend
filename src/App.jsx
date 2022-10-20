import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import SpellList from './components/Spells/SpellList';
import SpellDetail from './components/Spells/SpellDetail';
import EditReview from './components/Reviews/EditReview';
import AddReviewToSpell from './components/Reviews/AddReviewToSpell';
import ReviewList from './components/Reviews/ReviewList';
import ReviewDetail from './components/Reviews/ReviewDetail';





const App = () => {
  const [ user, setUser] = useState("")
  const [ loggedIn, setLoggedIn] = useState(false)
  const [ currentUser, setCurrentUser ] = useState("")
  const [errors, setErrors] = useState(false)
  const [ spells, setSpells ] = useState([])
  const [ reviews, setReviews ] = useState([])
 
  
  useEffect(()=> {
    fetch('/me')
    .then(resp => {
        if(resp.ok){
            resp.json().then(data => {
               setUser(data)
               data.error? setLoggedIn(false) : setLoggedIn(true)
            })
        }else {
            resp.json().then(data => setErrors(data.error))
        }
    })
   
}, [])
 
  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const updateUser = (user) => {
    setCurrentUser(user)
    setLoggedIn(true)
   }
  
  useEffect(() => {
    fetchSpells()
  }, [])

 const fetchSpells = () => {
  fetch('/spells')
          .then(resp => resp.json())
          .then(spells => setSpells(spells))
      }
  

    useEffect(() => {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(reviews => setReviews(reviews))
    }, [])


const addReview = (review) => {
  setReviews([...reviews, review])
}




 if(errors) return <h1>{errors}</h1>
  return (
   <Router>
     <Navbar user={user} loggedIn={loggedIn} logout={logout} currentUser={ currentUser} updateUser={ updateUser}/>
     <Routes>
      <Route path="/" element={<Home user={user} updateUser={updateUser} loggedIn={loggedIn}/>} />
      <Route path="/signup" element={<Signup updateUser={ updateUser} signup={signup}/>} />
      <Route path="/login" element={<Login updateUser={ updateUser} loggedIn={loggedIn} login={login}/>} />
      <Route path="/spells" element={<SpellList spells={spells}/>} />
      <Route path="/spells/:id" element={<SpellDetail />} />
      <Route path="/spells/reviews/:spell_id" element={ <AddReviewToSpell addReview={addReview}/>} />
      <Route path="/reviews/:id/edit" element={ <EditReview/>} />
      <Route path="/reviews" element={ <ReviewList reviews={reviews} />} />
      <Route path="/reviews/:id" element={ <ReviewDetail setReviews={setReviews}/>} />
     </Routes>
  </Router>

  
  );
}

export default App;










//     fetch('/spells')
//     .then(resp => {
//       if(resp.ok){
//         resp.json().then(setSpells)
//       }else {
//         resp.json().then(data => setErrors(data.error))
//       }
//     })
//  }





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
