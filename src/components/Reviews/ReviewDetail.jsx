import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReviewDetail = () => {
    const [ review, setReview ] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/reviews/${params.id}`)
        .then(resp => resp.json())
        .then(review => setReview(review))
    }, [params.id])




  return (
    <div>ReviewDetail:
        {review.username}
    </div>
  )
}

export default ReviewDetail


// useEffect(() => {
    //   fetch(`/reviews/${params.id}`)
    //     .then(resp => {
    //       if(resp.ok) {
    //         resp.json().then(data => {
    //           setReview(data)
    //         })
    //       } else {
    //         resp.json().then(data => setErrors(data.errors))
    //       }
    //     })
    // }, [params.id])
