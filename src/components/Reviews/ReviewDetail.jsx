import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReviewCard from './ReviewCard'

const ReviewDetail = () => {
    const [ review, setReview ]= useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/reviews/${params.id}`)
        .then(resp => resp.json())
        .then(review => setReview(review))
    }, [params.id])




  return (
    <div style={{ textAlign: "center", fontFamily: 'cursive', fontSize: 20}}>
      <h1 style={{textAlign: "center", fontFamily: 'cursive'}}>ReviewDetail</h1>
      <ReviewCard review={review} />
      <br></br>
      <br></br>
      <button onClick={() => navigate('/spells')} style={{fontFamily: 'cursive', fontSize: 20}}>Return to Spells</button>
    </div>
  )
}

export default ReviewDetail 