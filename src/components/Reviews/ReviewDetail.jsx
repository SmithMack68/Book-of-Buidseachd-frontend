import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from './ReviewCard'

const ReviewDetail = () => {
    const [ review, setReview ]= useState({})
    const params = useParams()
   

    useEffect(() => {
        fetch(`/reviews/${params.id}`)
        .then(resp => resp.json())
        .then(review => setReview(review))
    }, [params.id])




  return (
    <div><h1>ReviewDetail</h1>
    <ReviewCard review={review} />
    </div>
  )
}

export default ReviewDetail 