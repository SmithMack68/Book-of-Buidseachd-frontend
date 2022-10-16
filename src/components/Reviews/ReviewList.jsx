import React from 'react'
import ReviewCards from './ReviewCards'
// import { useParams } from 'react-router-dom'
// import { headers } from '../../Globals'



const ReviewList = ({ reviews }) => {
    // const [ reviews, setReviews ] = useState([])
    // // // const [ errors, setErrors ] = useState(false)
    // const params = useParams()

   

    // useEffect(() => {
    //     fetch('/reviews')
    //     .then(resp => resp.json())
    //     .then(reviews => setReviews(reviews))
    // }, [])

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
    //     fetch(`/reviews/${params.id}`, {
    //       method: "DELETE",
    //       headers,
    //     });
    //     removeReview(id)
    // }

    // const removeReview = (id) => {
    //     const updatedReviews = reviews.filter((review) => review.id !== id)
    //     setReviews(updatedReviews)
    // }

    const reviewCards = reviews.map((review, index) => <ReviewCards key={index} review={review} spell={review.spell} />)
// if(errors) return <h1>{errors}</h1>
  return (
    <div className='review-container'>
        { reviewCards }
    </div>
  )
}

export default ReviewList