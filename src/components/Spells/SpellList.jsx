import React, {useEffect, useState} from 'react'
// import { useNavigate } from 'react-router-dom'
import SpellCards from './SpellCards'

const SpellList = () => {
  const [ spells, setSpells ] = useState([])
  
  useEffect(() => {
    fetchSpells()
  }, [])

 const fetchSpells = () => {
  fetch('/spells')
          .then(resp => resp.json())
          .then(spells => setSpells(spells))
      }

  
 
  return (
    <div className="e-card-content" style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 50, marginTop: -100}}>
        <h1 >Spells</h1>
    <div className='cards'>
       {/* <CardContainer> */}
        {spells.map(spell => <SpellCards key={spell.id} spell={spell}/>)}
       {/* </CardContainer> */}
    </div>
    </div>
  
  )
}
 
export default SpellList


// const CardContainer = styled.h1`
// `
 // useEffect(() => {
  //   if( !loggedIn ) {
  //     navigate('/login')
  //   }
  // },  [loggedIn, navigate])