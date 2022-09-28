import React from 'react'
// import { useNavigate } from 'react-router-dom'
import SpellCards from './SpellCards'

const SpellList = ({spells}) => {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if( !loggedIn ) {
  //     navigate('/login')
  //   }
  // },  [loggedIn, navigate])

  // const spellCards = spells.map(spell => <SpellCards key={ spell.id } spell={ spell }/>)
  
  return (
    <div className='cards'>
       <h1 style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 150}}>Spells</h1>
        {spells.map((spell) => {
          return(
        <SpellCards 
        key={spell.id} 
        spell={spell} />)
        })}
    </div>
  
  )
}

export default SpellList