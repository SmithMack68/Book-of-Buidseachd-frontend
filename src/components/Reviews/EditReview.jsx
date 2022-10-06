import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { headers } from '../../Globals'


const EditReview = ({ updateReview }) => {
  const [formData, setFormData] = useState({
      username: '',
      comment: ''
  })

  const [errors, setErrors] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetch(`/reviews/${id}`)
    .then(resp => resp.json())
    .then(setFormData)
  }, [id])

  const handleChange = (e) => {
    const { name, value} = e.target 
    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/reviews/${id}`,{
      method: 'PATCH',
      headers,
      body:JSON.stringify(formData)
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(updateReview)
      } else {
        resp.json().then(data => setErrors(data))
      }
    })
  }
  if(errors) return <h1>{errors}</h1>
  return (
    <div>
      <h1 style={{fontSize: 45}}>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ fontSize: 30}}>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}>
          </input>
        </div>
        <div>
        <label style={{ fontSize: 30}}>Comment: </label>
          <input
            type="textarea"
            name="comment"
            value={formData.comment}
            onChange={handleChange}>
          </input>
        </div>
        <input style={{ fontFamily: 'cursive'}}type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default EditReview