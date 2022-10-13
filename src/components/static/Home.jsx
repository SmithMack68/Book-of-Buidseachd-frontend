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
    <div style={{textAlign: 'center', fontFamily: 'cursive'}}>
      <h1>Welcome {user.username}</h1>
      <h2>Spells Cast & Reviewed</h2>
    </div>
    )} else {
    return (
      <div style= { myStyle } >
      <h1 style={{fontSize: 100, fontFamily: 'cursive', textAlign: 'center', color: 'whitesmoke', textShadow: '-4px 0 black',}}>The Book <br></br>of <br></br>Buidseachd</h1>
      <button  onClick={ navigateSignup } style={{ position: 'fixed', width: 150, height: 45, fontFamily: 'cursive', fontSize: 25, marginLeft: 300}}>Signup</button> &nbsp;&nbsp;<button onClick={ navigateLogin } style={{ position: 'fixed', width: 150, height: 45, fontFamily: 'cursive', fontSize: 25, marginLeft: 550}}>Login</button>
    </div>
)}

}

export default Home



// return (
//   <div style={{textAlign: 'center', fontFamily: 'cursive'}}>
//     {/* <user key={user.id}></user> */}
//       <h1>Welcome {user.username}</h1>
//       <h2>Spells Cast & Reviewed</h2>
//       {/* <ul>
//           {user.casts.map(cast => (
//             <li>
//               <h2>{cast.spell.name}</h2>
//             </li>
//           ))}
//       </ul> */}
//   </div>
// )