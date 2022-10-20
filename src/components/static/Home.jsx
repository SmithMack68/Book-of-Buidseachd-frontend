import React from 'react';
import { useNavigate } from 'react-router-dom';



const Home = ({ user, loggedIn }) => {
  const myStyle= {
      backgroundImage: "url(https://res.cloudinary.com/dcpwwcueu/image/upload/v1663296501/Spells/spell-casting-magical-elements-gathered-together-ready-to-cast-magic-66830138_rgqabs.jpg)",
      height:'100%',
      width: '100%',
      position: 'fixed',
      marginTop: '-10px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }
  const navigate = useNavigate()

  const navigateSignup = () => {
    navigate('/signup')
  }
  const navigateLogin = () => {
    navigate('/login')
  }

  if (loggedIn) {
  return (
    <>
    <div style={{textAlign: 'center', fontFamily: 'cursive'}}>
      <h1 style={{fontSize:40}}> {user.username}, Welcome to your Grimoire</h1>
      <h2 style={{fontSize:30}}>Spells Cast</h2>
        {user.spells.map((spell, index) => (
          <li style={{ fontSize: 25}} key={index}>{spell.name} ~ Incantation: &nbsp; {spell.incantation} </li>
          ))}
    </div>
    <br></br>
    <br></br>
    <div style={{textAlign: 'center', fontFamily: 'cursive'}}>
    <h2 style={{fontSize:30}}>Spell Reviews</h2>
      {user.reviews.map((review, index) => (
        <li style={{ fontSize: 25}} key={index}>{review.spell.name} : {review.comment} </li>
        ))}
  </div>
  </>
    )} else {
    return (
      <div style= { myStyle } >
      <h1 style={{fontSize: 100, fontFamily: 'cursive', textAlign: 'center', color: 'whitesmoke', textShadow: '-4px 0 black',}}>The Book <br></br>of <br></br>Buidseachd</h1>
      <button  onClick={ navigateSignup } style={{ position: 'fixed', width: 150, height: 45, fontFamily: 'cursive', fontSize: 25, marginLeft: 300}}>Signup</button> &nbsp;&nbsp;<button onClick={ navigateLogin } style={{ position: 'fixed', width: 150, height: 45, fontFamily: 'cursive', fontSize: 25, marginLeft: 550}}>Login</button>
    </div>
)}

}

export default Home


