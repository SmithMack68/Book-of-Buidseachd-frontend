import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewCard from './ReviewCard'

const ReviewDetail = ({ setReviews }) => {
    const [ review, setReview ]= useState({})
    const params = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        fetch(`/reviews/${params.id}`)
        .then(resp => resp.json())
        .then(data => setReview(data))
    }, [params.id])




  return (
    <div><h1>ReviewDetail</h1>
    <h2><ReviewCard review={review} setReviews={setReviews}/></h2>
    </div>
  )
}

export default ReviewDetail 