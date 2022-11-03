import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'

const ReviewCard = ({ review, deleteReview, index }) => {
  // const navigate = useNavigate()
  // const {id} = useParams()
  // const handleEdit = () => {
  //   navigate(`/reviews/${id}/edit`)
  // }

const deleteReviewButton = (review) => {
if (review.permitted){
 return <button key='delete' onClick={() => deleteReview(review.id)} style={{fontFamily:'cursive'}}>Delete</button>
}
}


  return (
     <li key={index}>{review.username} : {review.comment}  &nbsp;&nbsp;
    {deleteReviewButton(review)}
    {/* <><button key='edit' style={{fontFamily:'cursive'}} onClick={handleEdit}>Edit</button><button key='delete' onClick={() => deleteReview(review.id)} style={{fontFamily:'cursive'}}>Delete</button></>  */}
     </li>
    
  )
}

export default ReviewCard


