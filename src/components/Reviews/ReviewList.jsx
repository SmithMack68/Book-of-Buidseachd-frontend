import React from 'react'
import ReviewCard from './ReviewCard'
// import { useParams } from 'react-router-dom'
// import { headers } from '../../Globals'



const ReviewList = ({ reviews, deleteReview }) => {
   

    const reviewCards = reviews.map((review, index) => <ReviewCard key={index} review={review} spell={review.spell} deleteReview={ deleteReview}/>)
// if(errors) return <h1>{errors}</h1>
  return (
    <div className='review-container'>
        { reviewCards }
    </div>
  )
}

export default ReviewList