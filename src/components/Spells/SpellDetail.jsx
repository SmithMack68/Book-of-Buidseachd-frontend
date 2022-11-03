import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewCard from '../Reviews/ReviewCard'


const SpellDetail = () => {
    const [ spell, setSpell ] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`/spells/${params.id}`)
      .then(resp => resp.json())
      .then(spell => setSpell(spell))
    }, [params.id])
  
   const handleNavigate = () => {
      navigate(`/spells/reviews/${params.id}`)
   }


   const deleteReview = (id) => {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    }).then(resp=>resp.json())
    .then(data=>{

      removeReview(data.id)
    })
}

const removeReview = (id) => {
  const updatedReviews = spell.reviews.filter((review) => review.id !== id)
    setSpell({...spell,reviews: updatedReviews})
}
  
  return (
      <div className='card-container' style={{ textAlign: 'center'}}>
        <h2 style={{fontFamily: "cursive", fontSize: 45}}>{ spell.name }</h2>
        <img src={ spell.image } alt="A spell" height={300} width={400}/> 
        <p style={{fontFamily: "cursive", fontSize:30}}><>Description:</> { spell.short_description }</p>
        <p style={{fontFamily: "cursive", fontSize:30}}>Requirements: { spell.requirements }</p>
        <h2 style={{fontFamily: "cursive", fontSize:45}}>Incantation: { spell.incantation }</h2>
        <h2 style={{fontFamily: "cursive", fontSize:30}}>Reviews:</h2>
        <h3 style={{fontFamily: "cursive", fontSize:20}} >
          {spell.reviews ? (spell.reviews.map((review, index) =><ReviewCard key={index} deleteReview={deleteReview} review={review} index={index}/> )) : ""}
        </h3>
        <br></br>
        <button  style={{fontFamily: "cursive", fontSize:15}} onClick={ handleNavigate }>Add Review</button>
    </div>
  )
}

export default SpellDetail














 