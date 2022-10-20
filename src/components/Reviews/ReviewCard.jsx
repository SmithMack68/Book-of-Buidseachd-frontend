import React from 'react'


const ReviewCard = ({ review, setReviews }) => {


  return (
    <div className='review-card-container' style={{fontFamily:'cursive'}}>
     <li>{review.username} : {review.comment}  &nbsp;&nbsp;<button style={{fontFamily:'cursive'}}>Edit</button><button onClick={() => setReviews(review.id)} style={{fontFamily:'cursive'}}>Delete</button></li>
    </div>  
  )
}

export default ReviewCard