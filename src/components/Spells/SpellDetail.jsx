import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { headers } from '../../Globals';


const SpellDetail = () => {
    const [ spell, setSpell ] = useState([])
    // const [errors, setErrors ] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`/spells/${params.id}`)
      .then(resp => resp.json())
      .then(spell => setSpell(spell))
    }, [params.id])

    const handleCast = () => {
      // fetch('/casts', {
      //   method: 'POST',
      //   headers,
      //   body :JSON.stringify({spell_id:id, user_id:id})
      // })
      // .then(resp => resp.json())
      // navigate('me')
    }
   const handleNavigate = () => {
      navigate('/reviews/new')
   }

  return (
      <div className='card-container' style={{ textAlign: 'center'}}>
        <h2 style={{fontFamily: "cursive", fontSize: 45}}>{ spell.name }</h2>
        <img src={ spell.image } alt="A spell" height={300} width={400}/>
        <p style={{fontFamily: "cursive", fontSize:30}}>Description: { spell.short_description }</p>
        <p style={{fontFamily: "cursive", fontSize:30}}>Requirements: { spell.requirements }</p>
        <h2 style={{fontFamily: "cursive", fontSize:45}}>Incantation: { spell.incantation }</h2>
        <button onClick={handleCast} style={{fontFamily: "cursive", fontSize:30}}>Cast</button>
        <button  style={{fontFamily: "cursive", fontSize:30}} onClick={ handleNavigate } >Add Review</button>
    </div>
  )
}

export default SpellDetail