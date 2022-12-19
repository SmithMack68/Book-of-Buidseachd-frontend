import React from 'react'
import { useNavigate } from 'react-router-dom'
import SpellCard from './SpellCard'

const SpellList = ({ spells, removeSpell }) => {
  const navigate = useNavigate()

  const deleteSpell = (id) => {
  fetch(`/spells/${id}`, {
    method: "DELETE",
   
  })
    removeSpell(id)
 
}
  
 const spellCards = spells.map((spell, index) => <SpellCard key={index} spell={spell} deleteSpell={deleteSpell}/>)
  return (
    <div className="e-card-content" style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 50, marginTop: -100}}>
        <h1 >Spells</h1>
        <button onClick={()=> navigate(`/spells/new`)} style={{width: 150, height: 45, fontFamily: 'cursive', textAlign: 'center', fontSize: 25}}>Add Spell</button>
      <div className='cards'>
        { spellCards }  
      </div>
    </div>
  
  )
}
 
export default SpellList










