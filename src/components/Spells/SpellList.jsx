import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SpellCards from './SpellCards'

const SpellList = ({ loggedIn, spells }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if( !loggedIn ) {
      navigate('/login')
    }
  },  [loggedIn])

  const spellCards = spells.map(spell => < SpellCards key={ spell.id } spell={ spell }/>)
  
  return (
    <div>
        <h1>Spells</h1>
        { spellCards }
    </div>
  )
}

export default SpellList