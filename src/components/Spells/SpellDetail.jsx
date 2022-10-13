import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { headers } from '../../Globals';



const SpellDetail = () => {
    const [ spell, setSpell ] = useState([])
    // const [ reviews, setReviews ] = useState([])
    // const [errors, setErrors ] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`/spells/${params.id}`)
      .then(resp => resp.json())
      .then(spell => setSpell(spell))
      // setReviews(spell.reviews)
    }, [params.id])

   
   const handleNavigate = () => {
      navigate('/reviews/new')
   }

  return (
      <div className='card-container' style={{ textAlign: 'center'}}>
        <h2 style={{fontFamily: "cursive", fontSize: 45}}>{ spell.name }</h2>
        <img src={ spell.image } alt="A spell" height={300} width={400}/>
        <p style={{fontFamily: "cursive", fontSize:30}}><>Description:</> { spell.short_description }</p>
        <p style={{fontFamily: "cursive", fontSize:30}}>Requirements: { spell.requirements }</p>
        <h2 style={{fontFamily: "cursive", fontSize:45}}>Incantation: { spell.incantation }</h2>
        <h2 style={{fontFamily: "cursive", fontSize:30}}>Reviews:</h2>
        {/* <div style={{fontFamily: "cursive", fontSize:20}}>
          { spell.reviews.map((review, index) => <li key={index}>{`${review.username} : ${review.comment}`}</li>)}
        </div>
        <br></br> */}
        <button  style={{fontFamily: "cursive", fontSize:20}} onClick={ handleNavigate } >Add Review</button>
    </div>
  )
}

export default SpellDetail











 // const handleCast = () => {
    //   // fetch('/casts', {
    //   //   method: 'POST',
    //   //   headers,
    //   //   body :JSON.stringify({spell_id:id, user_id:id})
    //   // })
    //   // .then(resp => resp.json())
    //   // navigate('me')
    // }