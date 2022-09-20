import React from 'react';



const Home = () => {
  const myStyle= {
      backgroundImage: "url(./images/SP/Spells.jpg)",
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