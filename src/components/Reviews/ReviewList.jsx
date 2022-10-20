import React from 'react'
import ReviewCard from './ReviewCard'
// import { useParams } from 'react-router-dom'
// import { headers } from '../../Globals'



const ReviewList = ({ reviews, deleteReview }) => {
    // const [ reviews, setReviews ] = useState([])
    // // // const [ errors, setErrors ] = useState(false)
    // const params = useParams()

  
    // useEffect(() => {
    //   fetch(`/reviews/${params.id}`)
    //     .then(resp => {
    //       if(resp.ok) {
    //         resp.json().then(data => {
    //           setReviews(data)
    //         })
    //       } else {
    //         resp.json().then(data => setErrors(data.errors))
    //       }
    //     })
    // }, [params.id])

    // const deleteReview = (id) => {
    //     fetch(`/reviews/${id}`, {
    //       method: "DELETE",
    //       headers,
    //     })
    //     removeReview(id)
    // }

    // const removeReview = (id) => {
    //     const updatedReviews = reviews.filter((review) => review.id !== id)
    //     setReviews(updatedReviews)
    // }

    const reviewCards = reviews.map((review, index) => <ReviewCard key={index} review={review} spell={review.spell} deleteReview={ deleteReview}/>)
// if(errors) return <h1>{errors}</h1>
  return (
    <div className='review-container'>
        { reviewCards }
    </div>
  )
}

export default ReviewList