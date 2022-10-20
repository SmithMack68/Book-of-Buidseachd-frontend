import React from 'react'
import { useNavigate } from 'react-router-dom'

const SpellCard = ({spell}) => {
    const navigate = useNavigate()
  return (
    <div className='card' style={{ textAlign: 'center', fontSize: 20 }}>
        <h2 style={{fontFamily: "cursive"}}>{spell.name}</h2>
        <img src={ spell.image } alt="name" height={250} width={350} quality={.05}/>
        <p style={{fontFamily: "cursive", marginLeft: 30, marginRight:30}}>Description: {spell.short_description}</p>
        <button onClick={ () => navigate(`/spells/${spell.id}`) } style={{fontFamily: "cursive"}}>Details</button>
    </div>
  )
}

export default SpellCard