import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Spell = ({ spells }) => {
    const [ spell, setSpell ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const sp = spells.find(sp => sp.id.toString() === id)
        setSpell(sp);
    }, [id, spells])
   
console.log(spell.image)
  return (
      <div className='card' style={{ textAlign: 'center'}}>
        <h2 style={{fontFamily: "cursive"}}>{ spell.name }</h2>
        <img src={ spell.image } alt="A spell" height={300} width={350}/>
        <p style={{fontFamily: "cursive"}}>Description: { spell.short_description }</p>
        <p style={{fontFamily: "cursive"}}>Requirements: { spell.requirements }</p>
        <h2 style={{fontFamily: "cursive"}}>Incantation: { spell.incantation }</h2>
    </div>
  )
}

export default Spell