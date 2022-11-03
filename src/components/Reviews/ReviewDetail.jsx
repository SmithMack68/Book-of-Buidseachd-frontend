import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from './ReviewCard'

const ReviewDetail = ({ setReviews }) => {
    const [ review, setReview ]= useState({})
    const {id} = useParams()
   

    useEffect(() => {
        fetch(`/reviews/${id}`)
        .then(resp => resp.json())
        .then(data => setReview(data))
    }, [id])




  return (
    <div><h1>ReviewDetail</h1>
    <h2><ReviewCard review={review} setReviews={setReviews}/></h2>
    </div>
  )
}

export default ReviewDetail 