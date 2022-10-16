import React from 'react'
// import { useNavigate } from 'react-router-dom'
import SpellCards from './SpellCards'

const SpellList = ({ spells }) => {
//   const [ spells, setSpells ] = useState([])
  
//   useEffect(() => {
//     fetchSpells()
//   }, [])

//  const fetchSpells = () => {
//   fetch('/spells')
//           .then(resp => resp.json())
//           .then(spells => setSpells(spells))
//       }

  
 
  return (
    <div className="e-card-content" style={{fontFamily: 'cursive', textAlign: 'center', fontSize: 50, marginTop: -100}}>
        <h1 >Spells</h1>
    <div className='cards'>
       {/* <CardContainer> */}
        {spells.map((spell, index) => <SpellCards key={index} spell={spell}/>)}
       {/* </CardContainer> */}
    </div>
    </div>
  
  )
}
 
export default SpellList


// const CardContainer = styled.h1`

 