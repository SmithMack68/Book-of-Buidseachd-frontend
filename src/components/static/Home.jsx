import React from 'react';



const Home = () => {
  const myStyle= {
      backgroundImage: "url(https://res.cloudinary.com/dcpwwcueu/image/upload/v1663296501/Spells/spell-casting-magical-elements-gathered-together-ready-to-cast-magic-66830138_rgqabs.jpg)",
      height:'100vh',
      marginTop: '-100px',
      fontSize: '50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }
  return (
    <div style= { myStyle } >
      <h1 style={{fontFamily: 'cursive', textAlign: 'center', color: 'lightgray', textShadow: '-1px 0 black', marginTop:'-100px'}}>The Book <br></br>of <br></br>Buidseachd</h1>
    </div>
  )
}

export default Home