import React from 'react'
import { useNavigate } from 'react-router-dom'
import SpellCard from './SpellCard'

const SpellList = ({ spells }) => {

  const navigate = useNavigate()

 
  return (
    <div className="e-card-content" style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 50, marginTop: -100}}>
        <h1 >Spells</h1>
        <button onClick={()=> navigate(`/spells/new`)} style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 25 }}>Add Spell</button>
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