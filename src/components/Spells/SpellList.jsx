import React from 'react'
import SpellCard from './SpellCard'

const SpellList = ({ spells }) => {

 
  return (
    <div className="e-card-content" style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 50, marginTop: -100}}>
        <h1 >Spells</h1>
    <div className='cards'>
        {spells.map((spell, index) => <SpellCard key={index} spell={spell}/>)}
    </div>
    </div>
  
  )
}
 
export default SpellList










// const CardContainer = styled.h1`
 //{/* <CardContainer> */}
 //{/* </CardContainer> */}