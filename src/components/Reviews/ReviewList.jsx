import React, { useEffect, useState } from 'react'
import ReviewCards from './ReviewCards'

const ReviewList = () => {
    const [ reviews, setReviews ] = useState([])

    useEffect(() => {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(reviews => setReviews(reviews))
    }, [])

    const deleteReview = (id) => {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        removeReview(id)
    }

    const removeReview = (id => {
        const updatedReviews = reviews.filter((review) => review.id !== id)
        setReviews(updatedReviews)
    })

    const reviewCards = reviews.map((review, index) => <ReviewCards key={index} review={review} spell={review.spell} deleteReview={deleteReview}/>)

  return (
    <div className='review-container'>
        { reviewCards }
    </div>
  )
}

export default ReviewList