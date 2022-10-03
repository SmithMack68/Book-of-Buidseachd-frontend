import React from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const myStyle= {
      backgroundImage: "url(https://res.cloudinary.com/dcpwwcueu/image/upload/v1663296501/Spells/spell-casting-magical-elements-gathered-together-ready-to-cast-magic-66830138_rgqabs.jpg)",
      height:'100%',
      width: '100%',
      // marginTop: '-10px',
      fontSize: '60px',
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

  return (
    <div style= { myStyle } >
      <h1 style={{fontFamily: 'cursive', textAlign: 'center', color: 'whitesmoke', textShadow: '-4px 0 black', marginTop:'-100px'}}>The Book <br></br>of <br></br>Buidseachd</h1>
      <button  onClick={ navigateSignup } style={{ width: 150, height: 45, fontFamily: 'cursive', fontSize: 25}}>Signup</button><button onClick={ navigateLogin } style={{ width: 150, height: 45, fontFamily: 'cursive', fontSize: 25}}>Login</button>
    </div>
  )
}

export default Home