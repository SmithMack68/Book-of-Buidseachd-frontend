import React from 'react'
import { useNavigate } from 'react-router-dom'


const ReviewCard = ({ review, deleteReview, index }) => {
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`/reviews/${review.id}/edit`)
  }

const deleteReviewButton = (review) => {
if (review.permitted){
 return <button key='delete' onClick={() => deleteReview(review.id)} style={{fontFamily:'cursive'}}>Delete</button>
 }
}

const editReviewButton = (review) => {
if (review.permitted){
  return <button style={{fontFamily:'cursive'}} onClick={handleEdit}>Edit Review</button>
}

}

  return (
     <li key={index}>{review.username} : {review.comment}  &nbsp;&nbsp;
    {deleteReviewButton(review)}{editReviewButton(review)}
    {/* <><button key='edit' style={{fontFamily:'cursive'}} onClick={handleEdit}>Edit</button><button key='delete' onClick={() => deleteReview(review.id)} style={{fontFamily:'cursive'}}>Delete</button></>  */}
     </li>
    
  )
}

export default ReviewCard


