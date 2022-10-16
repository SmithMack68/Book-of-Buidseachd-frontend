import React from 'react'


const ReviewCards = ({ review, deleteReview }) => {
  return (
    <div className='review-card-container'>
    <div>
        <h2>{review.username}</h2>
        <h3>{review.spell.name}</h3>
        <p>{review.comment}</p>
        <button onClick={(e) => deleteReview(review.id)}>Delete</button>
        <button>Edit</button>
    </div>  
    </div>
  )
}

export default ReviewCards